import * as React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";

import { Dialog } from "@reach/dialog";
import "@reach/tabs/styles.css";
import "@reach/dialog/styles.css";
import ListItem from "./list-item";
import TodoForm from "./todo-form";
import { Action, TodoActions, reducer, INITIAL_LIST, TodoItem } from "./reducer";

interface IListProps {
  todos: TodoItem[];
  dispatch: React.Dispatch<Action>;
}

function List({ todos, dispatch }: IListProps) {
  return (
    <div>
      <ul className="List">
        {todos.length > 0 ? (
          todos.map(t => (
            <ListItem
              key={t.id}
              todo={t}
              onEdit={id => dispatch({ type: TodoActions.EDIT_TODO, id })}
              onRemove={id => dispatch({ type: TodoActions.REMOVE_TODO, id })}
              onUpdate={(id, task) =>
                dispatch({ type: TodoActions.UPDATE_TODO, id, payload: task })
              }
              onUndo={id => dispatch({ type: TodoActions.MARK_AS_NOT_COMPLETED, id })}
              onCompleted={id => dispatch({ type: TodoActions.MARK_AS_COMPLETED, id })}
            />
          ))
        ) : (
          <div>
            <h2>Nothing to see here!</h2>
          </div>
        )}
      </ul>
      <div className="ActionTray">
        <button
          className="Button"
          type="button"
          onClick={() =>
            dispatch({
              type: TodoActions.OPEN_MODAL
            })
          }>
          Add New
        </button>
      </div>
    </div>
  );
}

export const ListView: React.FC = function() {
  const [state, dispatch] = React.useReducer(reducer, {
    modalOpen: false,
    selected: null,
    currentFilter: "All",
    todos: INITIAL_LIST
  });

  const completed = React.useMemo(() => state.todos.filter(todo => todo.completed), [state]);
  const incompleted = React.useMemo(() => state.todos.filter(todo => !todo.completed), [
    state
  ]);

  return (
    <>
      <Tabs>
        <TabList className="Filters">
          <Tab>All</Tab>
          <Tab>Completed</Tab>
          <Tab>Todo</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <List dispatch={dispatch} todos={state.todos} />
          </TabPanel>
          <TabPanel>
            <List dispatch={dispatch} todos={completed} />
          </TabPanel>
          <TabPanel>
            <List dispatch={dispatch} todos={incompleted} />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Dialog
        isOpen={state.modalOpen}
        onDismiss={() =>
          dispatch({
            type: TodoActions.DISMISS_MODAL
          })
        }>
        <TodoForm
          value={state.selected !== null ? state.selected.task : null}
          onSubmit={value =>
            state.selected !== null
              ? dispatch({
                  type: TodoActions.UPDATE_TODO,
                  payload: value,
                  id: state.selected.id
                })
              : dispatch({ type: TodoActions.ADD_TODO, payload: value })
          }
        />
      </Dialog>
    </>
  );
};
