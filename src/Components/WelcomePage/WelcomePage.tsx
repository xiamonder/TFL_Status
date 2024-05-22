import londonUndergroundLogo from "../../assets/underground_logo.png";
import { PageLayout } from "../Utils/PageLayout";
import { LinkButton } from "../Utils/LinkButton";

export const WelcomePage = () => {
      document.title = "TFL Status Checker";

  return (
    <PageLayout>
      <h1 className="text-3xl text-center font-bold">
        Welcome to the TFL Status Checker
      </h1>
      <img
        src={londonUndergroundLogo}
        alt="London Underground Logo"
        className="my-2 h-60 w-60"
      />
      <h2 className="mb-4 text-xl text-center font-bold">
        Stay up to date with the London Underground
      </h2>
      <LinkButton label={"View All Lines"} link={"/travel"} />
    </PageLayout>
  );
};
