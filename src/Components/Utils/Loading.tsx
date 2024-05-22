import londonUndergroundLogo from "../../assets/underground_logo.png";

export const Loading = () => {
  return (
    <>
      <img
        src={londonUndergroundLogo}
        alt="London Underground Logo"
        className="my-6 h-60 w-60"
      />
      <h1 className="mb-4 text-xl font-bold">Loading...</h1>;
    </>
  );
};
