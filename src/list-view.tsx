import * as React from "react";
import uuid from "uuid";
import Toggle from "./toggle";
import { EditItem } from './edit-item'
import { add, update, remove } from './utils'


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

type TodoList = TodoItem[];



interface ListViewProps {
 initialTasks: TodoItem[] 
}

interface ListViewState {
    tasks: TodoItem[];
    currentValue: string;
  }

export class ListView extends React.Component<ListViewProps, ListViewState> {
  state = {
    tasks: this.props.initialTasks || [],
    currentValue: ""
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentValue: event.target.value });
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    this.setState(state => {
      const tasks = add(
        { task: state.currentValue, id: uuid(), completed: false },
        state.tasks
      );
      return {
        tasks,
        currentValue: ""
      };
    });
  };

  handleUpdate = (task: TodoItem) => {
    this.setState(state => {
      const tasks = update(task, state.tasks);
      return {
        tasks
      };
    });
  };

  markAsComplete = (task: TodoItem) => {
    this.setState(state => {
      const tasks = update(
        { ...task, completed: !task.completed },
        state.tasks
      );
      return {
        tasks
      };
    });
  };

  handleRemove = (task: TodoItem) => {
    this.setState(state => {
      const tasks = remove(task, state.tasks);
      return {
        tasks
      };
    });
  };

  render() {
    return (
      <>
        <form className="Form" onSubmit={this.handleSubmit}>
          <input
            className="Input"
            value={this.state.currentValue}
            onChange={this.handleChange}
          />
          <div className="Tray">
            <button className="Button" type="submit">
              Submit
            </button>
          </div>
        </form>
        <ul className="List">
          {this.state.tasks.length > 0 &&
            this.state.tasks.map(t => (
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
                            onUpdate={this.handleUpdate}
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
                          onClick={() => this.handleRemove(t)}
                        >
                          Delete
                        </button>
                        <button
                          className="ActionButton"
                          onClick={() => this.markAsComplete(t)}
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
  }
}
