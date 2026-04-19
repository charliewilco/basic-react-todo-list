import { createContext, createElement, useMemo, useState } from "react";

/** UI-only state that controls the modal and current edit target. */
export interface TodoUIState {
	isModalOpen: boolean;
	selectedTodoId: number | null;
}

/** UI event handlers shared through context. */
export interface TodoHandlers {
	onDismissModal(): void;
	onEdit(id: number): void;
	onOpenModal(): void;
}

const initialState: TodoUIState = {
	isModalOpen: false,
	selectedTodoId: null,
};

export const TodoContext = createContext<[TodoUIState, TodoHandlers]>([
	initialState,
	{
		onDismissModal() {},
		onEdit() {},
		onOpenModal() {},
	},
]);

/**
 * Provides modal state and modal-related handlers to the app tree.
 *
 * @param props.children The rendered application subtree.
 * @returns The todo UI context provider.
 */
export function Provider({ children }: { children?: React.ReactNode }) {
	const [state, setState] = useState(initialState);

	const handlers = useMemo<TodoHandlers>(
		() => ({
			onDismissModal() {
				setState(initialState);
			},
			onEdit(id: number) {
				setState({
					isModalOpen: true,
					selectedTodoId: id,
				});
			},
			onOpenModal() {
				setState({
					isModalOpen: true,
					selectedTodoId: null,
				});
			},
		}),
		[],
	);

	return createElement(
		TodoContext.Provider,
		{
			value: [state, handlers],
		},
		children,
	);
}
