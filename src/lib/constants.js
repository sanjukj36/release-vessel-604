// Api URI for application data.
// export const API = "http://192.168.18.64:8002";
// export const API = "http://175.140.28.253:8010";
// export const API = "http://192.168.18.138/:5001";
export const API = "http://192.168.18.143:5002";
// Api URI for Inf-modules.
// export const API_INF = "http://192.168.5.109:5001";
// export const API_INF = "http://192.168.5.109:5001";
export const API_INF = API;
export const APIonlyIP = "http://192.168.18.143";

export const PortAlerts= "5001";
export const PortPing= "5002";
export const PortBanwidth= "5003";
export const PortTable= "5004";
export const PortMqtt= "5005";


// Page refresh time.
export const REFRESH_TIME = 1000 * 10;
export const REFRESH_TIME_ALARM = 1000 * 4;

// Alerts.
export const BANDWIDTH_ALARM = "Internet Connection Error.";
export const PING_MDC_ALARM = "MDC Connection Lost.";
export const PING_PLC_ALARM = "PLC Connection Lost.";
export const PING_TRANSBOX_ALARM = "TRANSBOX Connection Lost.";
export const FILE_SEND_STATUS = "Last 10 file submission failed.";

// Database File
export const FILE_STATUS = {
  notYetProcessed: "Not Yet Processed",
  processed: "Processed"
};

// Response of datatype from API
export const RESPONSE_DATA_TYPE = {
  bool: "BOOLEAN",
  char: "VARCHAR(50)"
};

// Regular Expression.
export const REG = {
  seach: /[\s.]+/g
};
