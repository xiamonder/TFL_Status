import { Link } from "react-router-dom";
import { ErrorType } from "../../utilities/types";
import londonUndergroundLogo from '../../assets/underground_logo.png'
type ErrorProps = {
  error: ErrorType;
};

export const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center px-4">
      <img
        src= {londonUndergroundLogo}
        alt="London Underground Logo"
        className="mb-4 h-60 w-60"
      />
      <h1 className="mb-4 text-2xl font-bold">{`${error.httpStatusCode}: ${error.httpStatus}`}</h1>
      <h2 className="mb-4 text-xl font-bold">{error.message}</h2>
      <Link to="/travel" className="text-lg font-medium hover:text-green">
        <h3>Return</h3>
      </Link>
    </div>
  );
};
