import produce from "immer";
// import produce from 'https://cdn.skypack.dev/immer';

export interface TodoItem {
	completed: boolean;
	id: number;
	task: string;
	editing: boolean;
}

export type Filters = "All" | "Completed" | "Todo";

export interface TodoListState {
	todos: TodoItem[];
	currentFilter: Filters;
	isModalOpen: boolean;
	selected: null | {
		task: string;
		id: number;
	};
}

export enum TodoActions {
	ADD_TODO = "ADD_TODO",
	EDIT_TODO = "EDIT_TODO",
	UPDATE_TODO = "UPDATE_TODO",
	REMOVE_TODO = "REMOVE_TODO",
	MARK_AS_COMPLETED = "MARK_AS_COMPLETED",
	MARK_AS_NOT_COMPLETED = "MARK_AS_NOT_COMPLETED",
	OPEN_MODAL = "OPEN_MODAL",
	DISMISS_MODAL = "DISMISS_MODAL",
}

let id = 0;

export const INITIAL_LIST: TodoItem[] = [
	{
		id: id++,
		completed: false,
		task: "get lunch",
		editing: false,
	},
	{
		id: id++,
		completed: false,
		task: "Check Flight",
		editing: false,
	},
];

export const GLOBAL_TODOS = {
	todos: [...INITIAL_LIST],
};

export type Action =
	| {
			type: TodoActions.ADD_TODO;
			payload: string;
	  }
	| {
			type: TodoActions.UPDATE_TODO;
			id: number;
			payload: string;
	  }
	| {
			type:
				| TodoActions.EDIT_TODO
				| TodoActions.REMOVE_TODO
				| TodoActions.MARK_AS_COMPLETED
				| TodoActions.MARK_AS_NOT_COMPLETED;
			id: number;
	  }
	| {
			type: TodoActions.OPEN_MODAL | TodoActions.DISMISS_MODAL;
	  };

export const reducer = produce((draft: TodoListState, action: Action) => {
	switch (action.type) {
		case TodoActions.ADD_TODO: {
			if (action.payload.length > 0) {
				draft.todos.unshift({
					task: action.payload,
					id: id++,
					completed: false,
					editing: false,
				});
			}
			draft.isModalOpen = false;
			break;
		}
		case TodoActions.UPDATE_TODO: {
			const index = draft.todos.findIndex((element) => element.id === action.id);

			draft.todos[index] = {
				...draft.todos[index],
				editing: false,
				task: action.payload,
			};
			draft.selected = null;
			draft.isModalOpen = false;
			break;
		}
		case TodoActions.REMOVE_TODO: {
			const index = draft.todos.findIndex((element) => element.id === action.id);

			draft.todos.splice(index, 1);

			break;
		}
		case TodoActions.EDIT_TODO: {
			console.log(action);
			const index = draft.todos.findIndex((element) => element.id === action.id);

			draft.isModalOpen = true;
			draft.todos[index] = {
				...draft.todos[index],
				editing: true,
			};

			draft.selected = {
				task: draft.todos[index].task,
				id: draft.todos[index].id,
			};

			break;
		}
		case TodoActions.MARK_AS_NOT_COMPLETED: {
			const index = draft.todos.findIndex((element) => element.id === action.id);

			draft.todos[index] = {
				...draft.todos[index],
				completed: false,
			};

			break;
		}
		case TodoActions.MARK_AS_COMPLETED: {
			const index = draft.todos.findIndex((element) => element.id === action.id);

			draft.todos[index] = {
				...draft.todos[index],
				completed: true,
			};

			break;
		}
		case TodoActions.DISMISS_MODAL: {
			draft.isModalOpen = false;
			draft.selected = null;

			break;
		}

		case TodoActions.OPEN_MODAL: {
			draft.isModalOpen = true;
			break;
		}
	}
});
