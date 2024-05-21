export type ValidityPeriods = {
  fromDate: string;
};
export type LineStatus = {
  statusSeverityDescription: string;
  reason: string;
  validityPeriods: ValidityPeriods[];
};

export type Line = {
  name: string;
  id: string;
  created: string;
  lineStatuses: LineStatus[];
};

export type ErrorType = {
  httpStatusCode: number;
  httpStatus: string;
  message: string;
};
