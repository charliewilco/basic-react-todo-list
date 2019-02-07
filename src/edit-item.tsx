import * as React from 'react'
import { TodoItem } from './list-view'

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
        <input
          className="InlineInput"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}