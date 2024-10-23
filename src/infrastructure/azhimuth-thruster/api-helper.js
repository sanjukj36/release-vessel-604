import { getMQTTDataAPI } from "@/infrastructure/mqtt/api";

/**
 * @param {Array<{title: string, block: string}>} blockWithTitle
 * @returns {Promise<[Array<{data: import("../miscellaneous/api").MqttData[], title: string}>, null] | [null, Error]>}
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
          .catch(err => [null, err])
      )
    );
    const data = res?.filter(x => x[0])?.map(x => x[0]);
    return [data, null];
  } catch (err) {
    return [null, err];
  }
}

/**
 * @param {import("../miscellaneous/api").MqttData} data
 * @param {string} title
 * @return {{data: import("../miscellaneous/api").MqttData | [], title: string }}
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
