import { statusTagGenerator } from "../../utilities/statusTagGenerator";
import { Line } from "../../utilities/types";
import { LinkButton } from "../Utils/LinkButton";

type AllLinesTableProps = { lines: Line[] };

export const AllLinesTable: React.FC<AllLinesTableProps> = ({ lines }) => {
  return (
    <table className="min-w-full table-auto rounded-md shadow-md">
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
            <td className="px-3 py-2">{statusTagGenerator(line)}</td>
            <td className="px-3 py-2">
              <LinkButton label={"View More"} link={`/travel/${line.id}`} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
