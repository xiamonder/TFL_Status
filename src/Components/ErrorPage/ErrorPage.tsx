import londonUndergroundLogo from "../../assets/underground_logo.png";
import { PageLayout } from "../Utils/PageLayout";
import { LinkButton } from "../Utils/LinkButton";

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
      <LinkButton label = {'Return'} link = {'/travel'} />
    </PageLayout>
  );
};
