import { Line } from "./types";

export const statusTagGenerator = (line: Line) => {
  let lineStatus;
  switch (line.lineStatuses[0].statusSeverityDescription) {
    case "Good Service":
      lineStatus = (
        <p className="rounded-md bg-green-100 px-2 py-1 text-green-700">
          Good Service
        </p>
      );
      break;
    case "Minor Delays":
      lineStatus = (
        <p className="rounded-md bg-yellow-100 px-2 py-1 text-yellow-700">
          Minor Delays
        </p>
      );
      break;
    case "Severe Delays":
      lineStatus = (
        <p className="rounded-md bg-red-100 px-2 py-1 text-red-700">
          Severe Delays
        </p>
      );
      break;
    default:
      lineStatus = null;
  }
  return lineStatus;
};
