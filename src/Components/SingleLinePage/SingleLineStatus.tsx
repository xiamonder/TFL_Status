import { formatDate } from "../../utilities/dateConverter";
import { statusTagGenerator } from "../../utilities/statusTagGenerator";
import { Line } from "../../utilities/types";

type SingleLineStatusProps = {
  line: Line;
};

export const SingleLineStatus: React.FC<SingleLineStatusProps> = ({ line }) => {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">{`${line.name} Line`}</h1>
      {statusTagGenerator(line)}
      {!line.lineStatuses[0].reason ? (
        <>
          <p className=" text-slate-600">{`Last Updated: ${formatDate(Date.now())}`}</p>
          <p>{`There are currently no reported disruptions on the ${line.name} line.`}</p>
        </>
      ) : (
        <div className="flex max-w-screen-md flex-col items-center justify-center gap-5">
          <p className="text-slate-600">{`Issue Last Updated: ${formatDate(line.lineStatuses[0].validityPeriods[0].fromDate)}`}</p>
          <p>{line.lineStatuses[0].reason}</p>
        </div>
      )}
    </>
  );
};
