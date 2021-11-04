import produce from "immer";
import cuid from "cuid";
import React from "react";

export interface TodoItem {
  completed: boolean;
  id: string;
  task: string;
  editing: boolean;
}

export type Filters = "All" | "Completed" | "Todo";

interface ITodoListState {
  todos: TodoItem[];
}

export enum TodoActions {
  ADD_TODO = "ADD_TODO",
  EDIT_TODO = "EDIT_TODO",
  UPDATE_TODO = "UPDATE_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  MARK_AS_COMPLETED = "MARK_AS_COMPLETED",
  MARK_AS_NOT_COMPLETED = "MARK_AS_NOT_COMPLETED"
}

export const INITIAL_LIST: TodoItem[] = [
  {
    id: cuid(),
    completed: false,
    task: "Get Lunch",
    editing: false
  },
  {
    id: cuid(),
    completed: false,
    task: "Check Flight",
    editing: false
  }
];

export const GLOBAL_TODOS = {
  todos: [...INITIAL_LIST]
};

export type Action =
  | {
      type: TodoActions.ADD_TODO;
      payload: TodoItem;
    }
  | {
      type: TodoActions.UPDATE_TODO;
      id: string;
      payload: string;
    }
  | {
      type:
        | TodoActions.REMOVE_TODO
        | TodoActions.MARK_AS_COMPLETED
        | TodoActions.MARK_AS_NOT_COMPLETED;
      id: string;
    };

export const listReducer: React.Reducer<ITodoListState, Action> = produce(
  (draft: ITodoListState, action: Action) => {
    switch (action.type) {
      case TodoActions.ADD_TODO: {
        draft.todos.unshift(action.payload);
        break;
      }
      case TodoActions.UPDATE_TODO: {
        const index = draft.todos.findIndex(element => element.id === action.id);

        draft.todos[index] = {
          ...draft.todos[index],
          editing: false,
          task: action.payload
        };
        break;
      }
      case TodoActions.REMOVE_TODO: {
        const index = draft.todos.findIndex(element => element.id === action.id);

        draft.todos.splice(index, 1);

        break;
      }

      case TodoActions.MARK_AS_NOT_COMPLETED: {
        const index = draft.todos.findIndex(element => element.id === action.id);

        draft.todos[index] = {
          ...draft.todos[index],
          completed: false
        };

        break;
      }
      case TodoActions.MARK_AS_COMPLETED: {
        const index = draft.todos.findIndex(element => element.id === action.id);

        draft.todos[index] = {
          ...draft.todos[index],
          completed: true
        };

        break;
      }
    }
  }
);
