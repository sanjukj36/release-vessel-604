import { RESPONSE_DATA_TYPE } from "@/lib/constants";

/**
 * @typedef {Object} MqttOverviewData
 * @property {string | null} title
 * @property {RESPONSE_DATA_TYPE.bool | RESPONSE_DATA_TYPE.char } data_type
 * @property {number | boolean | null} no_1
 * @property {number | boolean | null} no_2
 * @property {number | boolean | null} no_3
 * @property {number | boolean | null} no_4
 * @property {string | null} unit
 * @property {number | null} min
 * @property {number | null} max
 */

/**
 * @param {import("../mqtt/api").MqttData[]} dg1Data
 * @param {import("../mqtt/api").MqttData[]} dg2Data
 * @param {import("../mqtt/api").MqttData[]} dg3Data
 * @param {import("../mqtt/api").MqttData[]} dg4Data
 * @return {MqttOverviewData[]}
 *
 */
export const dtoToDgOverviewRow1Col1 = (dg1Data, dg2Data, dg3Data, dg4Data) => {
  // Consider which one should be taken to loop(1, 2, 3, 4).
  const baseData =
    dg1Data?.length > 0
      ? dg1Data
      : dg2Data?.length > 0
        ? dg2Data
        : dg3Data?.lenth > 0
          ? dg3Data
          : dg4Data?.lenth > 0
            ? dg4Data
            : null;
  if (!baseData) {
    return;
  }

  const result = [];
  baseData.forEach(item => {
    const dg1 = dg1Data.find(x => x.title === item.title);
    const dg2 = dg2Data.find(x => x.title === item.title);
    const dg3 = dg3Data.find(x => x.title === item.title);
    const dg4 = dg4Data.find(x => x.title === item.title);

    const obj = {};

    obj.title = item.title;
    obj.data_type = item.data_type;
    obj.no_1 = dg1 ? dg1.value : null;
    obj.no_2 = dg2 ? dg2.value : null;
    obj.no_3 = dg3 ? dg3.value : null;
    obj.no_4 = dg4 ? dg4.value : null;
    obj.unit = item.unit;
    obj.min = item.min;
    obj.max = item.max;

    result.push(obj);
  });
  return result;
};

export const dtoToGE = data => {
  if (!data || data?.lenth === 0) {
    return {
      guage: {},
      table: []
    };
  }
  return {
    guage: data[0],
    table: data.slice(1)
  };
};
