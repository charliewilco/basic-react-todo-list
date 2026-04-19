import { vi } from "vitest";

import type { TodoHandlers, TodoUIState } from "../context";
import type { TodoItem } from "../todo-store";

export interface TodoHandlerSpies {
	onDismissModal: ReturnType<typeof vi.fn>;
	onEdit: ReturnType<typeof vi.fn>;
	onOpenModal: ReturnType<typeof vi.fn>;
}

function cloneTodo(todo: TodoItem): TodoItem {
	return { ...todo };
}

export function createTodos(): TodoItem[] {
	return [
		{
			completed: false,
			id: 101,
			task: "get lunch",
		},
		{
			completed: false,
			id: 102,
			task: "Check Flight",
		},
	].map(cloneTodo);
}

export function createState(overrides: Partial<TodoUIState> = {}): TodoUIState {
	return {
		isModalOpen: false,
		selectedTodoId: null,
		...overrides,
	};
}

export function createHandlers(overrides: Partial<TodoHandlerSpies> = {}): TodoHandlerSpies {
	return {
		onDismissModal: vi.fn<() => void>(),
		onEdit: vi.fn<(id: number) => void>(),
		onOpenModal: vi.fn<() => void>(),
		...overrides,
	};
}

export function toTodoHandlers(handlers: TodoHandlerSpies): TodoHandlers {
	return handlers as unknown as TodoHandlers;
}
