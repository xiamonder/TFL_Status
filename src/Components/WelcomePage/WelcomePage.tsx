import { Link } from "react-router-dom";
import londonUndergroundLogo from "../../assets/underground_logo.png";

export const WelcomePage = () => {
  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center px-4">
        <h1 className="mb-4 text-4xl font-bold">Welcome to the TFL Status Checker</h1>
      <img
        src={londonUndergroundLogo}
        alt="London Underground Logo"
        className="mb-4 h-60 w-60"
      />
      <h2 className="mb-4 text-xl font-bold">Stay up to date with the London Underground</h2>
      <Link to="/travel" className="text-lg font-medium hover:text-green">
        <h3>View All Lines</h3>
      </Link>
    </div>
  );
};
