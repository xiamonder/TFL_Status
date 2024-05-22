import { Link } from "react-router-dom";

type ButtonProps = {
  label: string;
  link: string;
};

export const LinkButton: React.FC<ButtonProps> = ({ label, link }) => {
  return (
    <Link
      className={
        "flex items-center justify-center rounded-md bg-blue-100 px-4 py-1 text-center text-blue-700 shadow-sm duration-200  ease-in-out hover:bg-blue-700 hover:text-blue-100"
      }
      to={link}
    >
      {label}
    </Link>
  );
};
