import * as React from "react";
import uuid from "uuid";
import Toggle from "./toggle";

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

const add = (todo: TodoItem, todos: TodoList): TodoList => {
  if (todo) {
    return [todo, ...todos];
  } else {
    return todos;
  }
};

const remove = (removed: TodoItem, todos: TodoList): TodoList => {
  return todos.filter(
    (bookmark: TodoItem) => bookmark.id !== removed.id && bookmark
  );
};

const update = (updated: TodoItem, todos: TodoList): TodoList => {
  return todos.map(bookmark =>
    bookmark.id !== updated.id ? bookmark : updated
  );
};

interface EditProps {
  item: TodoItem;
  onUpdate: (t: TodoItem) => void;
  onDone: () => void;
}

export class EditItem extends React.Component<
  EditProps,
  {
    value: string;
  }
> {
  state = {
    value: this.props.item.task
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.onUpdate({ ...this.props.item, task: this.state.value });
    this.props.onDone();
  };

  render() {
    return (
      <form className="InlineForm" onSubmit={this.handleSubmit}>
        <input className="InlineInput" value={this.state.value} onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export class ListView extends React.Component<
  { initialTasks: TodoItem[] },
  {
    tasks: TodoItem[];
    currentValue: string;
  }
> {
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
      const tasks = update({ ...task, completed: true }, state.tasks);
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
            this.state.tasks.map(task => (
              <li key={task.id} className="ListItem">
                <Toggle>
                  {({ open, onToggle }) => (
                    <div className="Todo">
                      <button className="ActionButton" onClick={onToggle}>Edit</button>

                      <div className="InlineContent">
                        {open ? (
                          <EditItem
                            item={task}
                            onUpdate={this.handleUpdate}
                            onDone={onToggle}
                          />
                        ) : (
                          <span>{task.task}</span>
                        )}
                      </div>

                      <div className="InlineActions">
                        <button
                          className="ActionButton"
                          onClick={() => this.handleRemove(task)}
                        >
                          Delete
                        </button>
                        <button
                          className="ActionButton"
                          onClick={() => this.markAsComplete(task)}
                        >
                          Completed
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
