import { useEffect, useState } from "react";
import { getAllLinesStatus } from "../../utilities/api_utils";
import { AllLinesCard } from "./AllLinesCard";
import { Loading } from "../Utils/Loading";
import { ErrorType, Line } from "../../utilities/types";
import { Button } from "../Utils/Button";
import { Error } from "../Utils/Error";
import { formatDate } from "../../utilities/date_converter";

export const AllLinesList = () => {
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
              }
        );
        setIsLoading(false);
      });
  }, [resultRefresher]);

  return error ? (
    <Error error={error} />
  ) : isLoading ? (
    <Loading />
  ) : (
    <>
      {updatedTime && <h3>Last Updated: {updatedTime}</h3>}
      <Button
        label={"Refresh"}
        handleClick={() => {
          setIsLoading(true);
          setResultRefresher((current) => {
            return !current;
          });
        }}
      />
      <ul>
        {lines.map((line) => (
          <li key={line.id}>
            <AllLinesCard line={line} />
          </li>
        ))}
      </ul>
    </>
  );
};
