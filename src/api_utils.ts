import axios from "axios";

const tflAPI = axios.create({
  baseURL: "https://api.tfl.gov.uk/Line/",
});
const apiKey = { params: { app_key: "9443aa7e430342bb93603da5191962ba" } };

export const getAllLinesStatus = () => {
  return tflAPI.get("Mode/tube/Status", apiKey).then(({ data }) => {
    return data;
  });
};

export const getLineStatus = (line: string) => {
  return tflAPI.get(`${line}/Disruption`).then(({ data }) => {
    return data;
  });
};
