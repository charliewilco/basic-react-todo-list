import * as React from "react";

interface IAction {
  onToggle: () => void;
  open: boolean;
}

interface ToggleProps {
  defaultOpen?: boolean;
  children: (x: IAction) => JSX.Element;
}

export const Toggle = function(props: ToggleProps) {
  const [open, setOpen] = React.useState(props.defaultOpen || false);

  const onToggle = () => {
    setOpen(!open);
  };

  return props.children({ open, onToggle });
};
