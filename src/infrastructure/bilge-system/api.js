import { getMQTTDataSecAPI } from "../mqtt/api";
import { dtoToMultipleElement } from "./dto";

const BLOCK = {
  oily_water_separator: "bilge-OILY_WATER_SEPARATOR",
  dirty_oil_tank: "bilge-DIRTY_OIL_TANK",
  bilge_water_tk: "bilge-BILGE_WATER_TK",
  er_aft_p: "bilge-ER_AFT_P",
  er_forward_middle: "bilge-ER_FORWARD_MIDDLE",
  er_aft_s: "bilge-ER_AFT_S",
  jack_house_1: "bilge-JACK_HOUSE_1",
  jack_house_3: "bilge-JACK_HOUSE_3",
  rudder_pro_rm_p: "bilge-RUDDER_PRO_RM_P",
  rudder_pro_rm_s: "bilge-RUDDER_PRO_RM_S",
  void_1p: "bilge-VOID_1P",
  void_2p: "bilge-VOID_2P",
  void_3p: "bilge-VOID_3P",
  void_5p: "bilge-VOID_5P",
  void_6p: "bilge-VOID_6P",
  lower_deck_store_p: "bilge-LOWER_DECK_STORE_P",
  b_t_room: "bilge-B_T_ROOM",
  echo_spl_tk: "bilge-ECHO_SPL_TK",
  jack_house_2: "bilge-JACK_HOUSE_2",
  jack_house_4: "bilge-JACK_HOUSE_4",
  cascade_rm_lower_deck: "bilge-CASCADE_RM_LOWER_DECK",
  void_1s: "bilge-VOID_1S",
  void_2s: "bilge-VOID_2S",
  void_3s: "bilge-VOID_3S",
  void_4s: "bilge-VOID_4S",
  void_5s: "bilge-VOID_5S",
  void_6s: "bilge-VOID_6S"
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
