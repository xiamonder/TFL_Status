import { Link } from "react-router-dom";
import { ErrorType } from "../../utilities/types";
import londonUndergroundLogo from "../../assets/underground_logo.png";
type ErrorProps = {
  error: ErrorType;
};

export const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <>
      <img
        src={londonUndergroundLogo}
        alt="London Underground Logo"
        className="my-6 h-60 w-60"
      />
      <h1 className="mb-4 text-2xl font-bold">{`${error.httpStatusCode}: ${error.httpStatus}`}</h1>
      <h2 className="mb-4 text-xl font-bold">{error.message}</h2>
      <Link to="/travel" className="hover:text-green text-lg font-medium">
        <h3>Return</h3>
      </Link>
    </>
  );
};
