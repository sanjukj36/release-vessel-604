import { apiClient } from "@/infrastructure/client";
import { API } from "@/lib/constants";
import { dtoToTelemetryBandwidth } from "./dtoToTelemetry";

async function pcStatusApi(param) {
  return apiClient("GET", `${API}/api/app/pc/status/?param=${param}`);
}

/**
 * @typedef {Object} Bandwidth
 * @property {number} speed
 * @property {string} unit
 */
/**
 * @returns {Promise<Array<null | Bandwidth, null | AxiosError | Error | string>>}
 */
const getBandWidthStatusAPI = async () => {
  try {
    const res = await pcStatusApi("bandwidth");
    if (res.status === 200) {
      const { data } = res.data;
      const dtoData = dtoToTelemetryBandwidth(data);
      return [dtoData, null];
    }
    return [null, "Something went wrong"];
  } catch (err) {
    return [null, err?.message];
  }
};

/**
 * @typedef {Object} PingStatus
 * @property {string} host_name
 * @property {string} host
 * @property {boolean} status
 */
/**
 * @returns {Promise<Array<undefined | PingStatus[], undefined | AxiosError | Error>>}
 */
const getPingStatusAPI = async () => {
  try {
    const res = await pcStatusApi("ping");
    if (res.status === 200) {
      const { data } = res.data;
      return [data, null];
    }
    return [null, "Something went wrong"];
  } catch (err) {
    return [null, err.message];
  }
};

const getDiskUsageStatusAPI = async () => {
  try {
    const res = await pcStatusApi("storage");
    if (res.status === 200) {
      const { data } = res.data;
      return [data, null];
    }
  } catch (err) {
    return [null, err];
  }
};

/**
 * @typedef {Object} Storage
 * @property {number} free_storage
 * @property {number} total_storage
 * @property {number} used_storage
 */
/**
 * @returns {Promise<Array<null | Storage, null | AxiosError | Error>>}
 */
const getMdcStorageAPI = async () => {
  const [data, err] = await getDiskUsageStatusAPI();
  if (err) {
    return [null, err];
  }
  delete data.resp_mdc.success;
  return [data.resp_mdc, null];
};

/**
 * @returns {Promise<Array<null | Storage, null | AxiosError | Error>>}
 */
const getTransboxStorageAPI = async () => {
  const [data, err] = await getDiskUsageStatusAPI();
  if (err) {
    return [null, err];
  }
  delete data.resp_trans.success;
  return [data.resp_trans, null];
};

export default {
  getBandWidthStatusAPI,
  getPingStatusAPI,
  getMdcStorageAPI,
  getTransboxStorageAPI
};
