import { useEffect } from "react";
import { getLineStatus } from "../../utilities/api_utils";
import { useParams } from "react-router-dom";

type Params = { tubeLine: string };
export const SingleLinePage = () => {
  const { tubeLine } = useParams<Params>();
  useEffect(() => {
    getLineStatus(tubeLine!).then((lineStatus) => {
      console.log(lineStatus);
    });
  }, [tubeLine]);
  return <h1>Single Line</h1>;
};
