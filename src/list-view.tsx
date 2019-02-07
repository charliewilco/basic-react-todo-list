import * as React from "react";
import uuid from "uuid";
import { Toggle } from "./toggle";
import { EditItem } from "./edit-item";
import { add, update, remove } from "./utils";

export interface TodoItem {
  completed: boolean;
  id: string;
  task: string;
}

export const INITIAL_LIST: TodoItem[] = [
  {
    id: uuid(),
    completed: false,
    task: "get lunch"
  },
  {
    id: uuid(),
    completed: false,
    task: "Check Flight"
  }
];

interface ListViewProps {
  initialTasks: TodoItem[];
}

export const ListView: React.FC<ListViewProps> = function(props) {
  const [tasks, setTasks] = React.useState(props.initialTasks || []);
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setTasks(add({ task: value, id: uuid(), completed: false }, tasks));

    setValue("");
  };

  const handleRemove = (task: TodoItem) => {
    setTasks(remove(task, tasks));
  };

  const handleUpdate = (task: TodoItem) => {
    setTasks(update(task, tasks));
  };

  const markAsComplete = (task: TodoItem) => {
    setTasks(update({ ...task, completed: !task.completed }, tasks));
  };

  return (
    <>
      <form className="Form" onSubmit={handleSubmit}>
        <input className="Input" value={value} onChange={handleChange} />
        <div className="Tray">
          <button className="Button" type="submit">
            Submit
          </button>
        </div>
      </form>
      <ul className="List">
        {tasks.length > 0 &&
          tasks.map(t => (
            <li key={t.id} className="ListItem">
              <Toggle>
                {({ open, onToggle }) => (
                  <div className="Todo">
                    <button
                      className="ActionButton"
                      disabled={t.completed}
                      onClick={onToggle}
                    >
                      Edit
                    </button>

                    <div className="InlineContent">
                      {open ? (
                        <EditItem
                          item={t}
                          onUpdate={handleUpdate}
                          onDone={onToggle}
                        />
                      ) : t.completed ? (
                        <span>
                          <b>Completed!</b>{" "}
                          <span className="strike">{t.task}</span>
                        </span>
                      ) : (
                        <span>{t.task}</span>
                      )}
                    </div>

                    <div className="InlineActions">
                      <button
                        className="ActionButton"
                        onClick={() => handleRemove(t)}
                      >
                        Delete
                      </button>
                      <button
                        className="ActionButton"
                        onClick={() => markAsComplete(t)}
                      >
                        {t.completed ? "Undo" : "Complete"}
                      </button>
                    </div>
                  </div>
                )}
              </Toggle>
            </li>
          ))}
      </ul>
    </>
  );
};
