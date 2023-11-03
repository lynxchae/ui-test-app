import { MainTestInformation as TMainTestInformation } from "../api/mainTestInformation/MainTestInformation";

export const MAINTESTINFORMATION_TITLE_FIELD = "host";

export const MainTestInformationTitle = (
  record: TMainTestInformation
): string => {
  return record.host?.toString() || String(record.id);
};
