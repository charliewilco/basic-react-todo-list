import { useCallback, useRef } from "react";
import { useMixedCheckbox } from "@reach/checkbox";
import { FiCheckSquare, FiSquare, FiTrash2 } from "react-icons/fi";
import { TodoItem } from "./reducer";
import { Check } from "./button";

interface IBaseListProps {
  onCompleted(id: string): void;
  onUndo(id: string): void;
  onUpdate(id: string, task: string): void;
  onRemove(id: string): void;
}

interface IListProps extends IBaseListProps {
  todos: TodoItem[];
}

interface IListItemProps extends IBaseListProps {
  todo: TodoItem;
}

export const List: React.VFC<IListProps> = ({ todos, ...props }) => {
  return (
    <fieldset>
      <ul>
        {todos.length > 0 ? (
          todos.map(t => <_ListItem key={t.id} todo={t} {...props} />)
        ) : (
          <div>
            <h2>Nothing to see here!</h2>
          </div>
        )}
      </ul>

      <style jsx>{`
        ul {
          list-style: none inside;
          height: 100%;
          overflow: scroll;
        }

        .action {
          display: flex;
          justify-content: flex-end;
        }

        fieldset {
          border: 0;
        }
      `}</style>
    </fieldset>
  );
};

export const _ListItem: React.VFC<IListItemProps> = props => {
  const inputRef = useRef(null);

  let [inputProps] = useMixedCheckbox(inputRef, {
    defaultChecked: undefined,
    checked: props.todo.completed,
    onChange: () =>
      props.todo.completed ? props.onUndo(props.todo.id) : props.onCompleted(props.todo.id)
  });

  const handleEdit = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      props.onUpdate(props.todo.id, event.target.value);
    },
    [props.todo.id]
  );

  return (
    <li>
      <div className="todo-container">
        <label>
          <input {...inputProps} ref={inputRef} className="sr-only" />
          <Check completed={props.todo.completed} />
        </label>
        <div className="inline">
          {props.todo.completed ? (
            <span>
              <b>Completed!</b> <s>{props.todo.task}</s>
            </span>
          ) : (
            <input type="text" value={props.todo.task} onChange={handleEdit} />
          )}
        </div>

        <div className="button-group">
          <button onClick={() => props.onRemove(props.todo.id)}>
            <FiTrash2 size={16} />
          </button>
        </div>
      </div>
      <style jsx>{`
        .todo-container {
          display: flex;
          width: 100%;
          justify-content: space-between;
        }

        label {
          display: flex;
          align-items: center;
          flex: 1;
        }

        label button {
          margin-right: 1rem;
        }
        button {
          padding: 0.25rem;
          background: none;
          font-weight: 700;
          border: 0;
          color: white;
        }

        b {
          color: #00a3ff;
        }

        .button-group {
        }

        li {
        }

        input[type="text"] {
          display: block;
          width: 100%;
          padding: 0.5rem;
          font-size: 1rem;
          font-family: inherit;
          background: none;
          border: 0;
          color: inherit;
        }

        .inline {
          margin-left: 1rem;
          width: 100%;
        }
      `}</style>
    </li>
  );
};
