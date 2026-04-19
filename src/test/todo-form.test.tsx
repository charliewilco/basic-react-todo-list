import { describe, expect, test, vi } from "vitest";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TodoContext } from "../context";
import { TodoForm } from "../todo-form";
import { createHandlers, createState, toTodoHandlers } from "./test-helpers";

describe("TodoForm", () => {
	test("renders add mode and submits trimmed values", async () => {
		const onSubmit = vi.fn(async () => undefined);

		render(
			<TodoContext.Provider
				value={[createState({ isModalOpen: true }), toTodoHandlers(createHandlers())]}>
				<TodoForm isMutating={false} onSubmit={onSubmit} selectedTodo={null} />
			</TodoContext.Provider>,
		);

		const input = screen.getByRole("textbox");
		const submit = screen.getByRole("button", { name: "Submit" });

		expect(screen.getByRole("heading", { name: "Add Todo" })).toBeInTheDocument();
		expect(submit).toBeDisabled();

		await userEvent.type(input, "  Pick up groceries  ");
		expect(submit).toBeEnabled();

		await userEvent.click(submit);

		expect(onSubmit).toHaveBeenCalledWith("Pick up groceries");
	});

	test("syncs the input when edit state changes", () => {
		const handlers = createHandlers();
		const { rerender } = render(
			<TodoContext.Provider
				value={[
					createState({ isModalOpen: true, selectedTodoId: 101 }),
					toTodoHandlers(handlers),
				]}>
				<TodoForm
					isMutating={false}
					onSubmit={async () => undefined}
					selectedTodo={{
						completed: false,
						id: 101,
						task: "Existing task",
					}}
				/>
			</TodoContext.Provider>,
		);

		expect(screen.getByRole("heading", { name: "Edit Todo" })).toBeInTheDocument();
		expect(screen.getByRole("textbox")).toHaveValue("Existing task");

		rerender(
			<TodoContext.Provider
				value={[
					createState({ isModalOpen: true, selectedTodoId: 102 }),
					toTodoHandlers(handlers),
				]}>
				<TodoForm
					isMutating={false}
					onSubmit={async () => undefined}
					selectedTodo={{
						completed: false,
						id: 102,
						task: "Updated task",
					}}
				/>
			</TodoContext.Provider>,
		);

		expect(screen.getByRole("textbox")).toHaveValue("Updated task");
	});

	test("disables submit while a mutation is pending", () => {
		render(
			<TodoContext.Provider
				value={[createState({ isModalOpen: true }), toTodoHandlers(createHandlers())]}>
				<TodoForm isMutating={true} onSubmit={async () => undefined} selectedTodo={null} />
			</TodoContext.Provider>,
		);

		expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
	});
});
