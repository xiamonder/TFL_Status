import { useEffect } from "react";
import { getAllLinesStatus } from "../api_utils";

export const AllLinesPage = () => {
  useEffect(() => {
    getAllLinesStatus().then((lineStatus) => {
      console.log(lineStatus);
    });
  }, []);

  return <h1>All Lines</h1>;
};
