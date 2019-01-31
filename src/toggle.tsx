import * as React from 'react';

interface IState {
  open: boolean;
}

interface IAction extends IState {
  onToggle: () => void; 
}

export default class Toggle extends React.Component<{
  children: (x: IAction) => React.ReactNode
}, IState> {
  state = {
    open: false
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open}))
  }

  render() {
    return this.props.children({ ...this.state, onToggle: this.handleToggle })
  }
}