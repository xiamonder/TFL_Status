import { Line } from "../../utilities/types";
import { LinkButton } from "../Utils/LinkButton";

type AllLinesTableProps = { lines: Line[] };

export const AllLinesTable: React.FC<AllLinesTableProps> = ({ lines }) => {
  const statusTag = (line: Line) => {
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

  return (
      <table className="min-w-full rounded-md shadow-md table-auto">
        <thead className="text-md bg-slate-100 text-gray-600">
          <tr>
            <th className="px-3 py-2 font-medium">Line</th>
            <th className="px-3 py-2 font-medium">Status</th>
            <th className="px-3 py-2 font-medium">More Info</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-center">
          {lines.map((line) => (
            <tr key={line.id}>
              <td className="px-3 py-2">
                <h2>{line.name}</h2>
              </td>
              <td className="px-3 py-2">{statusTag(line)}</td>
              <td className="px-3 py-2">
                <LinkButton label={"View More"} link={`/travel/${line.id}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
   
  );
};
