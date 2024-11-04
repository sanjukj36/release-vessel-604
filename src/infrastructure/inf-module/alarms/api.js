import { getDatabaseFileStatusAPI } from "../data-base";
import telemetryAPI from "../telemetry";

const getAlarmsAPI = async () => {
  const [
    [bandwidthData, bandwidthErr],
    [pingData, pingErr],
    [fileUploadStatusData, fileUploadStatusDataErr]
  ] = await Promise.all([
    telemetryAPI.getBandWidthStatusAPI(),
    telemetryAPI.getPingStatusAPI(),
    getDatabaseFileStatusAPI()
  ]);
  return {
    pingData,
    pingErr,
    bandwidthData,
    bandwidthErr,
    fileUploadStatusData,
    fileUploadStatusDataErr
  };
};

export default {
  getAlarmsAPI
};
