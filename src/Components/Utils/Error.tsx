import { Link } from "react-router-dom";
import { ErrorType } from "../../utilities/types";

type ErrorProps = {
  error: ErrorType
};

export const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-5xl font-bold">{`${error.httpStatusCode}: ${error.httpStatus}`}</h1>
      <h2 className="text-xl font-semibold">{error.message}</h2>
      <Link to={`/travel`}>Return</Link>
    </div>
  );
};
