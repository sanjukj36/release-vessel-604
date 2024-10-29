import { getMQTTDataSecAPI } from "../mqtt/api";
import { dtoToMultipleElement } from "./dto";

const BLOCK = {
  leg_1: "jacking_system-LEG_1",
  leg_2: "jacking_system-LEG_2",
  leg_3: "jacking_system-LEG_3",
  leg_4: "jacking_system-LEG_4",
  alarm: "jacking_system-ALARM"
};

const getAllDataAPI = async () => {
  try {
    const allResponseWithError = await Promise.all(
      Object.entries(BLOCK).map(([key, value]) =>
        getMQTTDataSecAPI(value)
          .then(([data, err]) =>
            err ? { [key]: err } : { [key]: dtoToMultipleElement(data) }
          )
          .catch(err => ({ [key]: err }))
      )
    );
    const data = {};
    allResponseWithError.forEach(item => {
      Object.entries(item).forEach(([key, value]) => {
        data[key] = value;
      });
    });
    return [data, null];
  } catch (err) {
    return [null, err.message];
  }
};

export default { getAllDataAPI };
