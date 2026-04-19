import { useTransition } from "react";
import useSWR from "swr";

import {
	createTodo,
	getTodos,
	removeTodo,
	setTodoCompleted,
	type TodoItem,
	updateTodo,
} from "./todo-store";

const TODOS_KEY = "todos";

/** Creates a temporary negative ID so optimistic todos never collide with persisted records. */
function getOptimisticId(todos: TodoItem[]) {
	return Math.min(0, ...todos.map((todo) => todo.id)) - 1;
}

/**
 * Exposes the todo collection plus optimistic mutations backed by SWR and IndexedDB.
 *
 * @returns Todo data, mutation state, and CRUD helpers for the app shell.
 */
export function useTodos() {
	const { data: todos, mutate } = useSWR(TODOS_KEY, getTodos, {
		suspense: true,
	});
	const [isMutating, startTransition] = useTransition();

	const runMutation = (
		updateCache: (todos: TodoItem[]) => Promise<TodoItem[]>,
		optimisticData: (todos: TodoItem[]) => TodoItem[],
	) =>
		new Promise<void>((resolve, reject) => {
			startTransition(async () => {
				try {
					await mutate((currentTodos: TodoItem[] = []) => updateCache(currentTodos), {
						optimisticData: (currentTodos) => optimisticData(currentTodos ?? []),
						revalidate: false,
						rollbackOnError: true,
					});
					resolve();
				} catch (error) {
					reject(error);
				}
			});
		});

	const addTodo = (task: string) =>
		runMutation(
			async () => {
				await createTodo(task);
				return getTodos();
			},
			(currentTodos) => [
				{
					completed: false,
					id: getOptimisticId(currentTodos),
					task,
				},
				...currentTodos,
			],
		);

	const saveTodo = (id: number, task: string) =>
		runMutation(
			async () => {
				await updateTodo(id, task);
				return getTodos();
			},
			(currentTodos) =>
				currentTodos.map((todo) => (todo.id === id ? { ...todo, task } : todo)),
		);

	const deleteTodo = (id: number) =>
		runMutation(
			async () => {
				await removeTodo(id);
				return getTodos();
			},
			(currentTodos) => currentTodos.filter((todo) => todo.id !== id),
		);

	const setCompleted = (id: number, completed: boolean) =>
		runMutation(
			async () => {
				await setTodoCompleted(id, completed);
				return getTodos();
			},
			(currentTodos) =>
				currentTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo)),
		);

	return {
		addTodo,
		isMutating,
		removeTodo: deleteTodo,
		setCompleted,
		todos,
		updateTodo: saveTodo,
	};
}
