import { getMQTTDataAPI } from "@/infrastructure/mqtt/api";

/**
 * @param {Array<{title: string, block: string}>} blockWithTitle
 * @returns {Promise<[Array<{data: import("../mqtt/api").MqttData[], title: string}>, null] | [null, Error]>}
 */
export async function getDataAPI(blockWithTitle) {
  try {
    const res = await Promise.all(
      blockWithTitle.map(x =>
        getMQTTDataAPI(x.block)
          .then(res => {
            if (res.status === 200) {
              const { data } = res.data;
              const dto = dtoToPort(data, x.title);
              //TODO: Handle the return type.
              return [dto, null];
            }
          })
          .catch(err => [null, err.message])
      )
    );
    const data = res?.filter(x => x[0])?.map(x => x[0]);
    const err = res?.filter(x => x[1])?.map(x => x[1]);
    return [data, err];
  } catch (err) {
    return [null, err];
  }
}

/**
 * @param {import("../mqtt/api").MqttData} data
 * @param {string} title
 * @return {{data: import("../mqtt/api").MqttData | [], title: string }}
 */
function dtoToPort(data, title) {
  if (!data) {
    return {
      data: [],
      title
    };
  }

  const filteredData = data.filter(x => x.title);
  return { data: filteredData, title };
}
