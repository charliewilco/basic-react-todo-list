import { createContext, useReducer } from "react";

import { reducer, INITIAL_LIST, type TodoListState, TodoActions } from "./reducer";

let initialState: TodoListState = {
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
		onCompleted(_id: number) {},
		onOpenModal() {},
		onDismissModal() {},
		onSubmit(_value: string) {},
	},
]);

export function Provider({ children }: { children?: React.ReactNode }) {
	let [state, dispatch] = useReducer(reducer, initialState);

	let handleEdit = (id: number) => dispatch({ type: TodoActions.EDIT_TODO, id });
	let handleRemove = (id: number) => dispatch({ type: TodoActions.REMOVE_TODO, id });
	let handleUndo = (id: number) => dispatch({ type: TodoActions.MARK_AS_NOT_COMPLETED, id });
	let handleCompleted = (id: number) => dispatch({ type: TodoActions.MARK_AS_COMPLETED, id });
	let handleDismiss = () =>
		dispatch({
			type: TodoActions.DISMISS_MODAL,
		});

	let handleOpen = () => dispatch({ type: TodoActions.OPEN_MODAL });

	let handleSubmit = (value: string) => {
		state.selected !== null
			? dispatch({
					type: TodoActions.UPDATE_TODO,
					payload: value,
					id: state.selected.id,
			  })
			: dispatch({ type: TodoActions.ADD_TODO, payload: value });
	};

	let actionHandlers: TodoHandlers = {
		onEdit: handleEdit,
		onUndo: handleUndo,
		onRemove: handleRemove,
		onCompleted: handleCompleted,
		onOpenModal: handleOpen,
		onDismissModal: handleDismiss,
		onSubmit: handleSubmit,
	};

	return (
		<TodoContext.Provider value={[state, actionHandlers]}>{children}</TodoContext.Provider>
	);
}
