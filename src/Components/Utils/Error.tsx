import { ErrorType } from "../../utilities/types";
import londonUndergroundLogo from "../../assets/underground_logo.png";
import { LinkButton } from "./LinkButton";
import { Link } from "react-router-dom";
type ErrorProps = {
  error: ErrorType;
};

export const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <>
      <Link to={"/"}>
        <img
          src={londonUndergroundLogo}
          alt="London Underground Logo"
          className="my-2 h-60 w-60"
        />
      </Link>
      <h1 className="mb-4 text-2xl font-bold">{`${error.httpStatusCode}: ${error.httpStatus}`}</h1>
      <h2 className="mb-4 text-xl font-bold">{error.message}</h2>
      <LinkButton label={"Return"} link={"/travel"} />
    </>
  );
};
