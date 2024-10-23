import { getDataAPI } from "../api-helper";

const COL_1_BLOCK_WITH_TITLE = [
  { title: "VFD1", block: "at_port-vfd1" },
  { title: "PROPUL TRANS 1", block: "at_port-propul-trans-1" }
];

const COL_3_BLOCK_WITH_TITLE = [
  { title: "AZI THRUSTER", block: "at_port-azi-thruster" }
];

const COL_2_BLOCK_WITH_TITLE = [
  { title: "MOTOR WINDING TEMP", block: "at_port-motor_winding_temp" },
  { title: "MOTOR WINDING TEMP AL", block: "at_port-motor_winding_temp_al" },
  { title: "MOTOR BEARING TEMP", block: "at_port-motor_bearing_temp" },
  { title: "MOTOR BEARING TEMP AL", block: "at_port-motor_bearing_temp_al" },
  { title: "AIR TEMP", block: "at_port-air_temp" },
  { title: "AIR TEMP AL", block: "at_port-air_temp_al" }
];

function getPortCol1DataAPI() {
  return getDataAPI(COL_1_BLOCK_WITH_TITLE);
}

function getPortCol2DataAPI() {
  return getDataAPI(COL_2_BLOCK_WITH_TITLE);
}

function getPortCol3DataAPI() {
  return getDataAPI(COL_3_BLOCK_WITH_TITLE);
}

export default { getPortCol1DataAPI, getPortCol2DataAPI, getPortCol3DataAPI };
