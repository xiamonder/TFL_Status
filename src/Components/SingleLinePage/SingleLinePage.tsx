import { useEffect, useState } from "react";
import { getLineStatus } from "../../utilities/api_utils";
import { useParams } from "react-router-dom";
import { ErrorType, Line } from "../../utilities/types";
import { Loading } from "../Utils/Loading";
import { Error } from "../Utils/Error";
import { SingleLineStatus } from "./SingleLineStatus";
import { PageLayout } from "../Utils/PageLayout";
import { LinkButton } from "../Utils/LinkButton";

type Params = { tubeLine: string };

export const SingleLinePage = () => {
  const [line, setLine] = useState<Line | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<ErrorType | null>(null);
  const { tubeLine } = useParams<Params>();

  useEffect(() => {
    getLineStatus(tubeLine!)
      .then((lineStatus) => {
        setLine(lineStatus[0]);
        setIsLoading(false);
        document.title = `${lineStatus[0].name} Line Status`;
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
        document.title = `${error?.httpStatusCode}: ${error?.httpStatus}`;
      });
  }, [error?.httpStatus, error?.httpStatusCode, tubeLine]);

  return (
    <PageLayout>
      {error ? (
        <Error error={error} />
      ) : isLoading ? (
        <Loading />
      ) : (
        <>
          {line ? (
            <SingleLineStatus line={line} />
          ) : (
            <p>Line data not available</p>
          )}
          <LinkButton label={"Return"} link={"/travel"} />
        </>
      )}
    </PageLayout>
  );
};
