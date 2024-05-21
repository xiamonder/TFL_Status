import { Link } from "react-router-dom";
import londonUndergroundLogo from "../../assets/underground_logo.png";

export const ErrorPage = () => {
  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center px-4">
      <img
        src={londonUndergroundLogo}
        alt="London Underground Logo"
        className="mb-4 h-60 w-60"
      />
      <h1 className="mb-4 text-2xl font-bold">404</h1>
      <h2 className="mb-4 text-xl font-bold">Page not found!</h2>
      <Link to="/travel" className="text-lg font-medium hover:text-green">
        <h3>Return</h3>
      </Link>
    </div>
  );
};
