import { ErrorType } from "../../utilities/types";

type ErrorProps = {
  error: ErrorType
};

export const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-5xl font-bold">{error.httpStatusCode}</h1>
      <h2 className="text-3xl font-semibold">{error.httpStatus}</h2>
      <h3 className="text-xl font-semibold">{error.message}</h3>
    </div>
  );
};
