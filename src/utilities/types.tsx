export type LineStatus = {
  statusSeverityDescription: string;
};

export type Line = {
  name: string;
  id: string;
  lineStatuses: LineStatus[];
};

export type ErrorType = {
  httpStatusCode: number;
  httpStatus: string;
  message: string;
};