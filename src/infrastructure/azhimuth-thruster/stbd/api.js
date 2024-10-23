import { getDataAPI } from "../api-helper";

const COL_1_BLOCK_WITH_TITLE = [
  { title: "VFD2", block: "at_stbd-vfd2" },
  { title: "PROPUL TRANS 1", block: "at_stbd-propul-trans-1" }
];

const COL_3_BLOCK_WITH_TITLE = [
  { title: "AZI THRUSTER", block: "at_stbd-azi-thruster" }
];

const COL_2_BLOCK_WITH_TITLE = [
  { title: "MOTOR WINDING TEMP", block: "at_stbd-motor_winding_temp" },
  { title: "MOTOR WINDING TEMP AL", block: "at_stbd-motor_winding_temp_al" },
  { title: "MOTOR BEARING TEMP", block: "at_stbd-motor_bearing_temp" },
  { title: "MOTOR BEARING TEMP AL", block: "at_stbd-motor_bearing_temp_al" },
  { title: "AIR TEMP", block: "at_stbd-air_temp" },
  { title: "AIR TEMP AL", block: "at_stbd-air_temp_al" }
];

function getStbdCol1DataAPI() {
  return getDataAPI(COL_1_BLOCK_WITH_TITLE);
}

function getStbdCol2DataAPI() {
  return getDataAPI(COL_2_BLOCK_WITH_TITLE);
}

function getStbdCol3DataAPI() {
  return getDataAPI(COL_3_BLOCK_WITH_TITLE);
}

export default { getStbdCol1DataAPI, getStbdCol2DataAPI, getStbdCol3DataAPI };
