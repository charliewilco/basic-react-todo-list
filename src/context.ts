import { createContext, createElement, useReducer } from "react";

import {
	reducer,
	INITIAL_LIST,
	type Action,
	type TodoListState,
	TodoActions,
} from "./reducer";

const initialState: TodoListState = {
	isModalOpen: false,
	selected: null,
	currentFilter: "All",
	todos: INITIAL_LIST,
};

interface TodoHandlers {
	onRemove(id: number): void;
	onUndo(id: number): void;
	onEdit(id: number): void;
	onCompleted(id: number): void;
	onOpenModal(): void;
	onDismissModal(): void;
	onSubmit(value: string): void;
}

export const TodoContext = createContext<[TodoListState, TodoHandlers]>([
	initialState,
	{
		onRemove() {},
		onUndo() {},
		onEdit() {},
		onCompleted(id) {},
		onOpenModal() {},
		onDismissModal() {},
		onSubmit(value: string) {},
	},
]);

export function Provider({ children }: { children?: React.ReactNode }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleEdit = (id: number) => dispatch({ type: TodoActions.EDIT_TODO, id });
	const handleRemove = (id: number) => dispatch({ type: TodoActions.REMOVE_TODO, id });
	const handleUndo = (id: number) => dispatch({ type: TodoActions.MARK_AS_NOT_COMPLETED, id });
	const handleCompleted = (id: number) =>
		dispatch({ type: TodoActions.MARK_AS_COMPLETED, id });
	const handleDismiss = () =>
		dispatch({
			type: TodoActions.DISMISS_MODAL,
		});

	const handleOpen = () => dispatch({ type: TodoActions.OPEN_MODAL });

	const handleSubmit = (value: string) => {
		state.selected !== null
			? dispatch({
					type: TodoActions.UPDATE_TODO,
					payload: value,
					id: state.selected.id,
			  })
			: dispatch({ type: TodoActions.ADD_TODO, payload: value });
	};

	const handlers: TodoHandlers = {
		onEdit: handleEdit,
		onUndo: handleUndo,
		onRemove: handleRemove,
		onCompleted: handleCompleted,
		onOpenModal: handleOpen,
		onDismissModal: handleDismiss,
		onSubmit: handleSubmit,
	};

	return createElement(
		TodoContext.Provider,
		{
			value: [state, handlers],
		},
		children
	);
}
