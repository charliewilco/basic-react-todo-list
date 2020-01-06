import * as React from 'react';
import {TodoItem} from './reducer';
import {FiEdit3, FiCheckCircle, FiTrash2} from 'react-icons/fi';

interface IListItemProps {
  todo: TodoItem;
  onCompleted(id: string): void;
  onUndo(id: string): void;
  onUpdate(id: string, task: string): void;
  onEdit(id: string): void;
  onRemove(id: string): void;
}

interface EditProps {
  item: TodoItem;
  onUpdate: (id: string, task: string) => void;
}

export const EditItem: React.FC<EditProps> = function(props) {
  const [value, setValue] = React.useState<string>(props.item.task);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    props.onUpdate(props.item.id, value);
  };

  return (
    <form className="InlineForm" onSubmit={handleSubmit}>
      <input className="InlineInput" value={value} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default function ListItem(props: IListItemProps) {
  return (
    <li className="ListItem">
      <div className="Todo">
        <button
          className="ActionButton"
          onClick={() =>
            props.todo.completed
              ? props.onUndo(props.todo.id)
              : props.onCompleted(props.todo.id)
          }>
          <FiCheckCircle
            size={16}
            color={props.todo.completed ? '#9de4b5' : '#04060b'}
          />
        </button>

        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            marginLeft: 8,
          }}>
          <div className="InlineContent">
            {props.todo.completed ? (
              <span>
                <b style={{color: '#9de4b5'}}>Completed!</b>{' '}
                <span className="strike">{props.todo.task}</span>
              </span>
            ) : (
              <span>{props.todo.task}</span>
            )}
          </div>

          <div className="InlineActions">
            <button
              className="ActionButton"
              onClick={() => props.onRemove(props.todo.id)}>
              <FiTrash2 size={16} />
            </button>
            <button
              className="ActionButton"
              disabled={props.todo.completed}
              onClick={() => props.onEdit(props.todo.id)}>
              <FiEdit3 size={16} />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
