import * as React from 'react';
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

export const reducer: React.Reducer<ITodoListState, Action> = (
  state: ITodoListState,
  action: Action,
): ITodoListState => {
  switch (action.type) {
    case TodoActions.ADD_TODO: {
      if (action.payload.length > 0) {
        return {
          ...state,
          todos: [
            {
              task: action.payload,
              id: uuid(),
              completed: false,
              editing: false,
            },
            ...state.todos,
          ],
        };
      }
      return state;
    }
    case TodoActions.UPDATE_TODO: {
      const todos = state.todos.map(t =>
        t.id !== action.id ? t : {...t, editing: false, task: action.payload},
      );

      return {
        ...state,
        todos,
      };
    }
    case TodoActions.REMOVE_TODO: {
      const todos = state.todos.filter(t => t.id !== action.id && t);

      return {
        ...state,
        todos,
      };
    }
    case TodoActions.EDIT_TODO: {
      const todos = state.todos.map(t =>
        t.id !== action.id
          ? t
          : {
              ...t,
              editing: true,
            },
      );

      return {
        ...state,
        todos,
      };
    }
    case TodoActions.MARK_AS_NOT_COMPLETED: {
      const todos = state.todos.map(t =>
        t.id !== action.id
          ? t
          : {
              ...t,
              completed: false,
            },
      );

      return {
        ...state,
        todos,
      };
    }
    case TodoActions.MARK_AS_COMPLETED: {
      const todos = state.todos.map(t =>
        t.id !== action.id
          ? t
          : {
              ...t,
              completed: true,
            },
      );

      return {
        ...state,
        todos,
      };
    }
    case TodoActions.CHANGE_FILTER: {
      return {
        ...state,
        currentFilter: action.payload,
      };
    }
    default:
      throw new Error('Must specify Action Type');
  }
};
