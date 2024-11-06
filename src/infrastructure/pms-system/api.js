import { getMQTTDataSecAPI } from "../mqtt/api";
import {
  dtoToAcronym,
  dtoToDG,
  dtoToListItems,
  dtoToMultipleElement
} from "./dto";

const DG_BLOCK = {
  pms_dg1: "pms-dg1",
  pms_dg2: "pms-dg2",
  pms_dg3: "pms-dg3",
  pms_dg4: "pms-dg4"
};

const ACRONYM_BLOCK = {
  pms_1_crane: "pms-1_CRANE",
  pms_1_bow_thruster: "pms-1_BOW_THRUSTER",
  pms_2_crane: "pms-2_CRANE",
  pms_2_bow_thruster: "pms-2_BOW_THRUSTER",
  pms_jacking_vfd: "pms-JACKING_VFD"
};

const BLOCK = {
  pms_jt1: "pms-JT1",
  pms_t1: "pms-T1",
  pms_thtr1: "pms-THTR1",
  pms_2msb_bt: "pms-2MSB_BT",
  pms_t1_2msb: "pms-T1_2MSB",
  pms_t2_2msb: "pms-T2_2MSB",
  pms_cra1: "pms-CRA1",
  pms_1msb_bt1: "pms-1MSB_BT1",
  pms_jt2: "pms-JT2",
  pms_1msb_bt2: "pms-1MSB_BT2",
  pms_expb: "pms-EXPB",
  pms_thtr2: "pms-THTR2",
  pms_cra2: "pms-CRA2",
  pms_t2: "pms-T2",
  pms_pms_mode_bt1: "pms-PMS_MODE_BT1",
  pms_pms_mode_bt2: "pms-PMS_MODE_BT2",
  pms_pms_mode_bt3: "pms-PMS_MODE_BT3",
  pms_azi_thr_p: "pms-AZI_THR.P",
  pms_azi_thr_s: "pms-AZI_THR.S",
  pms_dg1_running: "pms-dg1_running",
  pms_dg2_running: "pms-dg2_running",
  pms_dg3_running: "pms-dg3_running",
  pms_dg4_running: "pms-dg4_running",
  pms_dg1_voltage: "pms-dg1_voltage",
  pms_dg2_voltage: "pms-dg2_voltage",
  pms_dg3_voltage: "pms-dg3_voltage",
  pms_dg4_voltage: "pms-dg4_voltage"
};

const LIST_BLOCK = {
  pms_690v_main_switchboard: "pms-690v_main_switchboard",
  pms_440v_main_switchboard: "pms-440V_main_switchboard"
};

const getAllDataAPI = async () => {
  try {
    const allResponseWithError = await Promise.all([
      ...Object.entries(BLOCK).map(([key, value]) =>
        getMQTTDataSecAPI(value)
          .then(([data, err]) =>
            err ? { [key]: err } : { [key]: dtoToMultipleElement(data) }
          )
          .catch(err => ({ [key]: err }))
      ),
      ...Object.entries(DG_BLOCK).map(([key, value]) =>
        getMQTTDataSecAPI(value)
          .then(([data, err]) =>
            err ? { [key]: err } : { [key]: dtoToDG(data) }
          )
          .catch(err => ({ [key]: err }))
      ),
      ...Object.entries(LIST_BLOCK).map(([key, value]) =>
        getMQTTDataSecAPI(value)
          .then(([data, err]) =>
            err ? { [key]: err } : { [key]: dtoToListItems(data) }
          )
          .catch(err => ({ [key]: err }))
      ),
      ...Object.entries(ACRONYM_BLOCK).map(([key, value]) =>
        getMQTTDataSecAPI(value)
          .then(([data, err]) =>
            err ? { [key]: err } : { [key]: dtoToAcronym(data) }
          )
          .catch(err => ({ [key]: err }))
      )
    ]);
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
