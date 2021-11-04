import { FiCheckSquare, FiSquare } from "react-icons/fi";

export const Button: React.FC<React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>> = props => {
  return (
    <button {...props}>
      {props.children}
      <style jsx>{`
        button {
          background: white;
          color: #00a3ff;
          border: 0;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          line-height: 1rem;
          appearance: none;
          font-weight: 700;
          transition: background-color 375ms ease-in-out;
        }

        button:hover {
          background: #00a3ff;
        }

        button:disabled {
          filter: grayscale(1);
          opacity: 0.5;
        }
      `}</style>
    </button>
  );
};

export const Check: React.VFC<{ completed: boolean }> = ({ completed }) => {
  return completed ? (
    <FiCheckSquare size={20} color="#00a3ff" />
  ) : (
    <FiSquare size={20} color={"currentColor"} />
  );
};
