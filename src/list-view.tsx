import { useReducer, useMemo } from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import { Dialog } from "@reach/dialog";
import { ListItem } from "./list-item";
import { TodoForm } from "./todo-form";
import { Action, TodoActions, reducer, INITIAL_LIST, TodoItem } from "./reducer";

interface IListProps {
  todos: TodoItem[];
  dispatch: (value: Action) => void;
}

const List = ({ todos, dispatch }: IListProps) => {
  const handleEdit = (id: string) => dispatch({ type: TodoActions.EDIT_TODO, id });
  const handleRemove = (id: string) => dispatch({ type: TodoActions.REMOVE_TODO, id });
  const handleUpdate = (id: string, task: string) =>
    dispatch({ type: TodoActions.UPDATE_TODO, id, payload: task });
  const handleUndo = (id: string) => dispatch({ type: TodoActions.MARK_AS_NOT_COMPLETED, id });
  const handleCompleted = (id: string) =>
    dispatch({ type: TodoActions.MARK_AS_COMPLETED, id });
  return (
    <div>
      <ul className="List">
        {todos.length > 0 ? (
          todos.map((t) => (
            <ListItem
              key={t.id}
              todo={t}
              onEdit={handleEdit}
              onRemove={handleRemove}
              onUpdate={handleUpdate}
              onUndo={handleUndo}
              onCompleted={handleCompleted}
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
              type: TodoActions.OPEN_MODAL,
            })
          }>
          Add New
        </button>
      </div>
    </div>
  );
};

export const ListView = () => {
  const [{ todos, selected, modalOpen }, dispatch] = useReducer(reducer, {
    modalOpen: false,
    selected: null,
    currentFilter: "All",
    todos: INITIAL_LIST,
  });

  const completed = useMemo(() => todos.filter((todo) => todo.completed), [todos]);
  const incompleted = useMemo(() => todos.filter((todo) => !todo.completed), [todos]);

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
            <List dispatch={dispatch} todos={todos} />
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
        aria-label={selected ? "Edit Todo Form" : "Create New Todo Form"}
        isOpen={modalOpen}
        onDismiss={() =>
          dispatch({
            type: TodoActions.DISMISS_MODAL,
          })
        }>
        <TodoForm
          value={selected !== null ? selected.task : null}
          onSubmit={(value) =>
            selected !== null
              ? dispatch({
                  type: TodoActions.UPDATE_TODO,
                  payload: value,
                  id: selected.id,
                })
              : dispatch({ type: TodoActions.ADD_TODO, payload: value })
          }
        />
      </Dialog>
    </>
  );
};
