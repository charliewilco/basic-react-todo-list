import * as React from 'react';
import produce from 'immer';
import uuid from 'uuid/v4';

export interface TodoItem {
  completed: boolean;
  id: string;
  task: string;
  editing: boolean;
}

export type Filters = 'All' | 'Completed' | 'Todo';

interface ITodoListState {
  todos: TodoItem[];
  currentFilter: Filters;
  modalOpen: boolean;
}

export enum TodoActions {
  ADD_TODO = 'ADD_TODO',
  EDIT_TODO = 'EDIT_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  MARK_AS_COMPLETED = 'MARK_AS_COMPLETED',
  MARK_AS_NOT_COMPLETED = 'MARK_AS_NOT_COMPLETED',
  CHANGE_FILTER = 'FILTER',
}

export const INITIAL_LIST: TodoItem[] = [
  {
    id: uuid(),
    completed: false,
    task: 'get lunch',
    editing: false,
  },
  {
    id: uuid(),
    completed: false,
    task: 'Check Flight',
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
      id: string;
      payload: string;
    }
  | {
      type: TodoActions.CHANGE_FILTER;
      payload: Filters;
    }
  | {
      type:
        | TodoActions.EDIT_TODO
        | TodoActions.REMOVE_TODO
        | TodoActions.MARK_AS_COMPLETED
        | TodoActions.MARK_AS_NOT_COMPLETED;
      id: string;
    };

export const reducer: React.Reducer<ITodoListState, Action> = produce(
  (draft: ITodoListState, action: Action) => {
    switch (action.type) {
      case TodoActions.ADD_TODO: {
        if (action.payload.length > 0) {
          draft.todos.unshift({
            task: action.payload,
            id: uuid(),
            completed: false,
            editing: false,
          });
        }
        break;
      }
      case TodoActions.UPDATE_TODO: {
        const index = draft.todos.findIndex(
          element => element.id === action.id,
        );

        draft.todos[index] = {
          ...draft.todos[index],
          editing: false,
          task: action.payload,
        };

        draft.modalOpen = false;
        break;
      }
      case TodoActions.REMOVE_TODO: {
        const index = draft.todos.findIndex(
          element => element.id === action.id,
        );

        draft.todos.splice(index, 1);

        break;
      }
      case TodoActions.EDIT_TODO: {
        const index = draft.todos.findIndex(
          element => element.id === action.id,
        );

        draft.modalOpen = true;
        draft.todos[index] = {
          ...draft.todos[index],
          editing: true,
        };

        break;
      }
      case TodoActions.MARK_AS_NOT_COMPLETED: {
        const index = draft.todos.findIndex(
          element => element.id === action.id,
        );

        draft.todos[index] = {
          ...draft.todos[index],
          completed: false,
        };

        break;
      }
      case TodoActions.MARK_AS_COMPLETED: {
        const index = draft.todos.findIndex(
          element => element.id === action.id,
        );

        draft.todos[index] = {
          ...draft.todos[index],
          completed: true,
        };

        break;
      }
      case TodoActions.CHANGE_FILTER: {
        draft.currentFilter = action.payload;

        break;
      }
    }
  },
);
