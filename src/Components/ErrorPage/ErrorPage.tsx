import londonUndergroundLogo from "../../assets/underground_logo.png";
import { PageLayout } from "../Utils/PageLayout";
import { LinkButton } from "../Utils/LinkButton";
import { Link } from "react-router-dom";

document.title = "404: Page Not Found";
export const ErrorPage = () => {
  return (
    <PageLayout>
      <Link to={"/"}>
        <img
          src={londonUndergroundLogo}
          alt="London Underground Logo"
          className="my-2 h-60 w-60"
        />
      </Link>
      <h1 className="mb-4 text-center text-2xl font-bold">404</h1>
      <h2 className="mb-4 text-center text-xl font-bold">Page not found!</h2>
      <LinkButton label={"Return"} link={"/travel"} />
    </PageLayout>
  );
};
