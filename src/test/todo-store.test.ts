import { describe, expect, test } from "vitest";

import { createTodo, getTodos, removeTodo, setTodoCompleted, updateTodo } from "../todo-store";

describe("todo-store", () => {
	test("seeds the initial todos once", async () => {
		const todos = await getTodos();

		expect(todos.map((todo: { task: string }) => todo.task)).toEqual([
			"Check Flight",
			"get lunch",
		]);
	});

	test("creates, updates, toggles, and removes todos", async () => {
		await createTodo("Plan trip");

		let todos = await getTodos();
		expect(todos[0].task).toBe("Plan trip");

		await updateTodo(todos[0].id, "Book hotel");
		await setTodoCompleted(todos[0].id, true);

		todos = await getTodos();
		expect(todos[0]).toMatchObject({
			completed: true,
			task: "Book hotel",
		});

		await removeTodo(todos[0].id);

		todos = await getTodos();
		expect(todos.map((todo: { task: string }) => todo.task)).toEqual([
			"Check Flight",
			"get lunch",
		]);
	});
});
