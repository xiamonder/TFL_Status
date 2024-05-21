import { Link } from "react-router-dom";
import { Line } from "../../utilities/types";

type AllLinesCardProps = { line: Line };

export const AllLinesCard: React.FC<AllLinesCardProps> = ({ line }) => {
  return (
    <div>
      <h2>{line.name}</h2>
      <p>{line.lineStatuses[0].statusSeverityDescription}</p>
      <Link to={`/travel/${line.id}`}>View More</Link>
    </div>
  );
};
