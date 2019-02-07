import * as React from "react";
import { TodoItem } from "./list-view";

interface EditProps {
  item: TodoItem;
  onUpdate: (t: TodoItem) => void;
  onDone: () => void;
}

export const EditItem: React.FC<EditProps> = function(props) {
  const [value, setValue] = React.useState(props.item.task);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    props.onUpdate({ ...props.item, task: value });
    props.onDone();
  };

  return (
    <form className="InlineForm" onSubmit={handleSubmit}>
      <input className="InlineInput" value={value} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};
