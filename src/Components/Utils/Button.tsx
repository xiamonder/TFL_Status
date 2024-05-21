type ButtonProps = {
  label: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<ButtonProps> = ({ label, handleClick }) => {
  return (
    <button
      className={
        "rounded bg-slate-600 w-20 py-2 font-normal text-sm text-white shadow-md transition-shadow duration-200 ease-in-out hover:bg-slate-800 hover:shadow-lg"
      }
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
