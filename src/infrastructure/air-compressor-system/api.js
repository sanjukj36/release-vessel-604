import { getMQTTDataSecAPI } from "../mqtt/api";
import { dtoToSingleElement, dtoToTwoElement } from "./dto";

const AIR_COMPRESSOR_BLOCK = [
  "air_comp-no_1_air_compressor",
  "air_comp-no_2_air_compressor"
];
const BLOCK = [
  "air_comp-no_1_dg",
  "air_comp-no_2_dg",
  "air_comp-no_3_dg",
  "air_comp-no_4_dg",
  "air_comp_no_1_air_reservoir",
  "air_comp_no_2_air_reservoir"
];

const getAllDataAPI = async () => {
  try {
    const data = await Promise.all(
      BLOCK.map(block => getMQTTDataSecAPI(block))
    );
    return [data, null];
  } catch (err) {
    return [null, err.message];
  }
};

/**
 * 2 response. `running` and `common alarm`.
 */
const getAirCompressorDataAPI = async () => {
  try {
    const [
      [no1AirCompressorData, no1AirCompressorErr],
      [no2AirCompressorData, no2AirCompressorErr],
      [no1DgData, no1DgErr],
      [no2DgData, no2DgErr],
      [no3DgData, no3DgErr],
      [no4DgData, no4DgErr],
      [no1AirReservoirData, no1AirReservoirErr],
      [no2AirReservoirData, no2AirReservoirErr]
    ] = await Promise.all(
      [...AIR_COMPRESSOR_BLOCK, ...BLOCK].map(block => getMQTTDataSecAPI(block))
    );
    //TODO: handle Error.
    const dtoNo1AirCompressor = dtoToTwoElement(no1AirCompressorData);
    const dtoNo2AirCompressor = dtoToTwoElement(no2AirCompressorData);
    const dtoNo1Dg = dtoToTwoElement(no1DgData);
    const dtoNo2Dg = dtoToTwoElement(no2DgData);
    const dtoNo3Dg = dtoToTwoElement(no3DgData);
    const dtoNo4Dg = dtoToTwoElement(no4DgData);
    const dtoNo1AirReservoir = dtoToSingleElement(no1AirReservoirData);
    const dtoNo2AirReservoir = dtoToSingleElement(no2AirReservoirData);

    return {
      error: null,
      data: {
        no1AirCompressor: dtoNo1AirCompressor,
        no2AirCompressor: dtoNo2AirCompressor,
        no1Dg: dtoNo1Dg,
        no2Dg: dtoNo2Dg,
        no3Dg: dtoNo3Dg,
        no4Dg: dtoNo4Dg,
        no1AirReservoir: dtoNo1AirReservoir,
        no2AirReservoir: dtoNo2AirReservoir
      }
    };
  } catch (err) {
    return { data: null, error: err.message };
  }
};

export default { getAllDataAPI, getAirCompressorDataAPI };
