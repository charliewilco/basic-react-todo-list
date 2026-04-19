import { Suspense, useContext, useMemo } from "react";
import { SWRConfig } from "swr";

import { Provider, TodoContext } from "./context";
import { ErrorBoundary } from "./error-boundary";
import { Modal } from "./modal";
import { TodoForm } from "./todo-form";
import { TodoTabs } from "./todo-tabs";
import { useTodos } from "./use-todos";

function AppFallback() {
	return (
		<main className="app-shell">
			<section className="app-card">
				<div className="app-feedback" aria-live="polite">
					<h2 className="app-feedback__title">Loading todos...</h2>
					<p className="app-feedback__copy">Pulling your local todo list from IndexedDB.</p>
				</div>
			</section>
		</main>
	);
}

function AppContent() {
	const [{ selectedTodoId }, { onDismissModal }] = useContext(TodoContext);
	const { addTodo, isMutating, removeTodo, setCompleted, todos, updateTodo } = useTodos();
	const selectedTodo =
		todos.find((todo: { id: number }) => todo.id === selectedTodoId) ?? null;

	const handleSubmit = async (value: string) => {
		if (selectedTodo) {
			await updateTodo(selectedTodo.id, value);
		} else {
			await addTodo(value);
		}

		onDismissModal();
	};

	return (
		<>
			<main className="app-shell">
				<section className="app-card">
					<TodoTabs
						isMutating={isMutating}
						onCompleted={(id) => setCompleted(id, true)}
						onRemove={removeTodo}
						onUndo={(id) => setCompleted(id, false)}
						todos={todos}
					/>
				</section>
			</main>
			<Modal>
				<TodoForm
					isMutating={isMutating}
					onSubmit={handleSubmit}
					selectedTodo={selectedTodo}
				/>
			</Modal>
		</>
	);
}

export function App() {
	const cache = useMemo(() => new Map(), []);

	return (
		<SWRConfig value={{ provider: () => cache }}>
			<Provider>
				<ErrorBoundary>
					<Suspense fallback={<AppFallback />}>
						<AppContent />
					</Suspense>
				</ErrorBoundary>
			</Provider>
		</SWRConfig>
	);
}
