import { formatDate } from "../../utilities/date_converter";
import { Line } from "../../utilities/types";

type SingleLineStatusProps = {
  line: Line;
};

export const SingleLineStatus: React.FC<SingleLineStatusProps> = ({ line }) => {
  return (
    <>
      <h1>{`${line.name} Line Status`}</h1>
      <h2>{line.lineStatuses[0].statusSeverityDescription}</h2>
      {!line.lineStatuses[0].reason ? (
        <>
          <p>{`Last Updated: ${formatDate(line.created)}`}</p>
          <p>{`There are currently no reported disruptions on the ${line.name} line`}</p>
        </>
      ) : (
        <>
          <p>{`Issue Last Updated: ${formatDate(line.lineStatuses[0].validityPeriods[0].fromDate)}`}</p>
          <p>{line.lineStatuses[0].reason}</p>
        </>
      )}
    </>
  );
};
