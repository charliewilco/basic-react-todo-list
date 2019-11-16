import * as React from 'react';
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { FiFilter } from 'react-icons/fi';
import ListItem from './list-item';
import TodoForm from './todo-form';
import {
  Action,
  TodoActions,
  reducer,
  INITIAL_LIST,
  Filters,
  TodoItem,
} from './reducer';

interface IListProps {
  todos: TodoItem[];
  dispatch: React.Dispatch<Action>;
}

function List(props: IListProps) {
  return (
    <ul className="List">
      {props.todos.length > 0 ? (
        props.todos.map(t => (
          <ListItem
            key={t.id}
            todo={t}
            onEdit={id => props.dispatch({type: TodoActions.EDIT_TODO, id})}
            onRemove={id => props.dispatch({type: TodoActions.REMOVE_TODO, id})}
            onUpdate={(id, task) =>
              props.dispatch({type: TodoActions.UPDATE_TODO, id, payload: task})
            }
            onUndo={id =>
              props.dispatch({type: TodoActions.MARK_AS_NOT_COMPLETED, id})
            }
            onCompleted={id =>
              props.dispatch({type: TodoActions.MARK_AS_COMPLETED, id})
            }
          />
        ))
      ) : (
        <div>
          <h2>Nothing to see here!</h2>
        </div>
      )}
    </ul>
  );
}

interface IFilterButtonProps {
  filters: Filters[];
  current: Filters;
  onUpdateFilter(f: Filters): void;
}

function FilterButtons(props: IFilterButtonProps) {
  return (
    <nav className="Filters">
      <FiFilter />
        <ul style={{ listStyle: "none inside", margin: 0, marginLeft: 16, padding: 0}}>


      
      {props.filters.map(f => (
          <li key={f} style={{ display: "inline-block" }}>
        <button
          className={['FilterButton', props.current === f && 'active']
            .filter(Boolean)
            .join(' ')}
          onClick={() => props.onUpdateFilter(f)}>
          {f}
        </button>
          </li>
      ))}
          </ul>
    </nav>
  );
}

export const ListView: React.FC = function() {
  const [state, dispatch] = React.useReducer(reducer, {
    currentFilter: 'All',
    todos: INITIAL_LIST,
  });

  const completed = React.useMemo(
    () => state.todos.filter(todo => todo.completed),
    [state],
  );
  const incompleted = React.useMemo(
    () => state.todos.filter(todo => !todo.completed),
    [state],
  );

  function updateFilter(f: Filters) {
    dispatch({type: TodoActions.CHANGE_FILTER, payload: f});
  }

  return (
    <>

      <FilterButtons
        current={state.currentFilter}
        filters={['All', 'Completed', 'Todo']}
        onUpdateFilter={updateFilter}
      />

      <List
        dispatch={dispatch}
        todos={
          state.currentFilter === 'All'
            ? state.todos
            : state.currentFilter === 'Completed'
            ? completed
            : incompleted
        }
      />

    <Dialog isOpen={true}>
      <TodoForm
        onSubmit={value =>
          dispatch({type: TodoActions.ADD_TODO, payload: value})
        }
      />


    </Dialog>
    </>
  );
};
