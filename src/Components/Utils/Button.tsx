type ButtonProps = {
  label: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<ButtonProps> = ({ label, handleClick }) => {
  return (
    <button
      className={
        "text rounded-md bg-blue-100 px-4 py-1 text-blue-700 shadow-md duration-200 ease-in-out hover:bg-blue-700 hover:text-blue-100"
      }
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
