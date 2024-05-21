import { useEffect, useState } from "react";
import { getAllLinesStatus } from "../../utilities/api_utils";
import { AllLinesCard } from "./AllLinesCard";
import { Loading } from "../Utils/Loading";
import { ErrorType, Line } from "../../utilities/types";
import { Button } from "../Utils/Button";
import { Error } from "../Utils/Error";

export const AllLinesList = () => {
  const [lines, setLines] = useState<Line[]>([]);
  const [updatedTime, setUpdatedTime] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<ErrorType | null>(null);
  const [resultRefresher, setResultRefresher] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllLinesStatus()
      .then(({ data, headers }) => {
        setLines(data);
        setUpdatedTime(headers.date);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [resultRefresher]);

  return error ? (
    <Error error={error} />
  ) : !isLoading ? (
    <>
      {updatedTime && <h3>Last Updated: {updatedTime}</h3>}
      <Button
        label={"Refresh"}
        handleClick={() => {
          setIsLoading(true);
          setResultRefresher((current) => {
            console.log("click");
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
  ) : (
    <Loading />
  );
};
