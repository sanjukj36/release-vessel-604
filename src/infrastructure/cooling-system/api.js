import { getMQTTDataSecAPI } from "../mqtt/api";
import { dtoToMultipleElement } from "./dto";

const BLOCK = {
  sw_reservation_tk: "cl-SW_RESERVATION_TK",
  no1_sw_cooling_pump: "cl-No_1_s_w_cooling_pump",
  no2_sw_cooling_pump: "cl-No_2_s_w_cooling_pump",
  no3_sw_cooling_pump: "cl-No_3_s_w_cooling_pump",
  no1_fw_cooling_pump: "cl-No_1_F_W_C_PUMP",
  no2_fw_cooling_pump: "cl-No_2_F_W_C_PUMP",
  no1_fw_expan_tk: "cl-1_F_W_EXPAN_TK",
  no2_fw_expan_tk: "cl-2_F_W_EXPAN_TK",
  sea_water_main_pipe_pressure: "cl-SEA_WATER_MAIN_PIPE_PRESSURE"
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
