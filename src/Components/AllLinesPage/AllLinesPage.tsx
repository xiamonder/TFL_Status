import { useEffect, useState } from "react";
import { PageLayout } from "../Utils/PageLayout";
import { ErrorType, Line } from "../../utilities/types";
import { getAllLinesStatus } from "../../utilities/api_utils";
import { formatDate } from "../../utilities/dateConverter";
import { Error } from "../Utils/Error";
import { Loading } from "../Utils/Loading";
import { Button } from "../Utils/Button";
import { AllLinesTable } from "./AllLinesTable";
import londonUndergroundLogo from "../../assets/underground_logo.png";
import { Link } from "react-router-dom";

export const AllLinesPage = () => {
  const [lines, setLines] = useState<Line[]>([]);
  const [updatedTime, setUpdatedTime] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<ErrorType | null>(null);
  const [resultRefresher, setResultRefresher] = useState(false);

  useEffect(() => {
    document.title = "Underground Status";
    setIsLoading(true);
    getAllLinesStatus()
      .then(({ data }) => {
        setLines(data);
        setUpdatedTime(formatDate(Date.now()));
        setIsLoading(false);
      })
      .catch(({ response }) => {
        setError(
          response
            ? response.data
            : {
                httpStatusCode: 500,
                httpStatus: "Unknown error",
                message: "Please try refreshing the page",
              },
        );
        setIsLoading(false);
      });
  }, [resultRefresher]);

  const refreshResults = () => {
    setIsLoading(true);
    setResultRefresher((current) => {
      return !current;
    });
  };

  return (
    <PageLayout>
      {error ? (
        <Error error={error} />
      ) : isLoading ? (
        <Loading />
      ) : (
        <div className="flex min-w-full flex-col items-center justify-between gap-5">
          <Link to={"/"}>
            <img
              src={londonUndergroundLogo}
              alt="London Underground Logo"
              className=" h-24 w-24"
            />
          </Link>
          <h1 className="mb-4 text-3xl font-bold">Underground Status</h1>
          <div className="flex min-w-full items-center justify-evenly p-4 text-slate-600">
            {updatedTime && <h3>Last Updated: {updatedTime}</h3>}
            <Button label={"Refresh"} handleClick={refreshResults} />
          </div>
          <AllLinesTable lines={lines} />
        </div>
      )}
    </PageLayout>
  );
};
