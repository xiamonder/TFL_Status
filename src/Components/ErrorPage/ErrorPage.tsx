import { Link } from "react-router-dom";
import londonUndergroundLogo from "../../assets/underground_logo.png";
import { PageLayout } from "../Utils/PageLayout";

document.title = '404: Page Not Found'
export const ErrorPage = () => {
  return (
    <PageLayout>
      <img
        src={londonUndergroundLogo}
        alt="London Underground Logo"
        className="my-6 h-60 w-60"
      />
      <h1 className="mb-4 text-2xl font-bold">404</h1>
      <h2 className="mb-4 text-xl font-bold">Page not found!</h2>
      <Link to="/travel" className="hover:text-green text-lg font-medium">
        <h3>Return</h3>
      </Link>
    </PageLayout>
  );
};
