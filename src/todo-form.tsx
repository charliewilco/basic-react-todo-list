import cuid from "cuid";
import produce from "immer";
import { useCallback, useState, useRef } from "react";
import { FiCheckSquare, FiSquare, FiPlusCircle } from "react-icons/fi";
import { useMixedCheckbox } from "@reach/checkbox";
import { TodoItem } from "./reducer";
import { Button, Check } from "./button";

interface ITodoForm {
  onSubmit(task: TodoItem): void;
}

export const inputReducerInitializer = (): TodoItem => {
  return {
    task: "",
    id: cuid(),
    completed: false,
    editing: false
  };
};

export const _TodoForm: React.VFC<ITodoForm> = props => {
  const [state, setState] = useState(inputReducerInitializer);
  const inputRef = useRef(null);
  let [inputProps] = useMixedCheckbox(inputRef, {
    defaultChecked: undefined,
    checked: state.completed,
    onChange: () =>
      setState(prev => ({
        ...prev,
        completed: !prev.completed
      }))
  });

  // const [state, dispatch] = useReducer(inputReducer, undefined, inputReducerInitializer);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setState(
        produce(draft => {
          draft.task = event.target.value;
        })
      );
    },
    [setState]
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent, state: TodoItem) => {
      event.preventDefault();

      props.onSubmit(state);

      setState(inputReducerInitializer());
    },
    [props, setState]
  );

  return (
    <form onSubmit={e => handleSubmit(e, state)}>
      <label>
        <input {...inputProps} ref={inputRef} className="sr-only" />
        <Check completed={state.completed} />
      </label>
      <input type="text" value={state.task} onChange={handleChange} />
      <Button type="submit" disabled={state.task.length === 0}>
        <FiPlusCircle aria-label="Submit" />
      </Button>

      <style jsx>{`
        form {
          width: 100%;
          display: flex;
          padding: 0.5rem;
          align-items: center;
          flex: 0;
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

        div {
          margin-bottom: 16px;
        }

        @media (prefers-color-scheme: dark) {
          form {
            background: rgb(24, 24, 27);
          }
        }
      `}</style>
    </form>
  );
};
