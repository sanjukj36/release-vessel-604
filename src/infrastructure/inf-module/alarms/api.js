import { apiClient } from "@/infrastructure/client";
import { API_INF } from "@/lib/constants";
import { getDatabaseFileStatusAPI } from "../data-base";
import telemetryAPI from "../telemetry";
import { checkBandwidthAlarm, checkPingAlarm } from "./check-alarms";
import { dtoToAlarms } from "./dto";

/*
const getAlarmsAPI = async () => {
  const [
    [bandwidthData, bandwidthErr],
    [pingData, pingErr],
    [dbFileData, dbFileDataErr]
  ] = await Promise.all([
    telemetryAPI.getBandWidthStatusAPI(),
    telemetryAPI.getPingStatusAPI(),
    getDatabaseFileStatusAPI()
  ]);

  const bandwidthAlarmList = checkBandwidthAlarm(bandwidthData);
  const pingAlarmList = checkPingAlarm(pingData);

  return [...bandwidthAlarmList, ...pingAlarmList, ...pingAlarmList];
};
*/
const getAlarmsAPI = async () => {
  try {
    const response = await apiClient("GET", `${API_INF}/alerts`);
    if (response.status === 200) {
      const { alerts } = response.data;
      return [dtoToAlarms(alerts), null];
    } else {
      return [null, "Something Went wrong"];
    }
  } catch (err) {
    return [null, err];
  }
};

export default {
  getAlarmsAPI
};
