import { describe, expect, test, vi } from "vitest";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TodoContext } from "../context";
import { List } from "../list";
import { ListItem } from "../list-item";
import { createHandlers, createState, createTodos, toTodoHandlers } from "./test-helpers";

describe("List", () => {
	test("renders an empty state when there are no todos", () => {
		render(<List onCompleted={() => {}} onRemove={() => {}} onUndo={() => {}} todos={[]} />);

		expect(screen.getByRole("heading", { name: "Nothing to see here!" })).toBeInTheDocument();
	});

	test("renders list items when todos are provided", () => {
		render(
			<List
				onCompleted={() => {}}
				onRemove={() => {}}
				onUndo={() => {}}
				todos={createTodos()}
			/>,
		);

		expect(screen.getAllByRole("listitem")).toHaveLength(2);
	});
});

describe("ListItem", () => {
	test("calls the correct handlers for incomplete todos", async () => {
		const handlers = createHandlers();
		const onCompleted = vi.fn();
		const onRemove = vi.fn();
		const onUndo = vi.fn();
		const todo = createTodos()[0];

		render(
			<TodoContext.Provider value={[createState(), toTodoHandlers(handlers)]}>
				<ListItem
					isMutating={false}
					onCompleted={onCompleted}
					onRemove={onRemove}
					onUndo={onUndo}
					todo={todo}
				/>
			</TodoContext.Provider>,
		);

		await userEvent.click(screen.getByRole("button", { name: "Remove Todo" }));
		await userEvent.click(screen.getByRole("button", { name: "Edit Todo" }));
		await userEvent.click(screen.getAllByRole("button")[0]);

		expect(onRemove).toHaveBeenCalledWith(todo.id);
		expect(handlers.onEdit).toHaveBeenCalledWith(todo.id);
		expect(onCompleted).toHaveBeenCalledWith(todo.id);
		expect(onUndo).not.toHaveBeenCalled();
	});

	test("renders completed todos and routes status clicks to undo", async () => {
		const handlers = createHandlers();
		const onCompleted = vi.fn();
		const onRemove = vi.fn();
		const onUndo = vi.fn();
		const completedTodo = { ...createTodos()[0], completed: true };

		render(
			<TodoContext.Provider value={[createState(), toTodoHandlers(handlers)]}>
				<ListItem
					isMutating={false}
					onCompleted={onCompleted}
					onRemove={onRemove}
					onUndo={onUndo}
					todo={completedTodo}
				/>
			</TodoContext.Provider>,
		);

		expect(screen.getByText("Completed!")).toBeInTheDocument();
		expect(screen.getByRole("button", { name: "Edit Todo" })).toBeDisabled();

		await userEvent.click(screen.getAllByRole("button")[0]);

		expect(onUndo).toHaveBeenCalledWith(completedTodo.id);
		expect(onCompleted).not.toHaveBeenCalled();
	});
});
