import { getMQTTDataAPI, getMQTTDataSecAPI } from "../mqtt/api";
import { dtoToDgOverviewRow1Col1, dtoToGE } from "./dto";

/**
 * All API fetch class.
 */
class DgData {
  constructor(baseTag) {
    if (!baseTag) throw new Error("Base Tag is required");
    this.baseTag = baseTag;
  }

  async getData(tailTag) {
    if (!tailTag || !this.baseTag) {
      throw new Error("Base Tag & Tail Tag is required.");
    }
    try {
      const response = await getMQTTDataAPI(`${this.baseTag}-${tailTag}`);
      if (response.status === 200) {
        const { data } = response.data;
        return { success: true, data, error: null };
      } else {
        return { success: false, error: null, data: [] };
      }
    } catch (err) {
      return { success: false, error: err, data: [] };
    }
  }

  async getAllData() {
    try {
      const [
        row1_col1,
        row1_col2_row2,
        row1_col2_row1,
        row1_col3_row1,
        row1_col4_row1,
        row1_col2_row3,
        row2_col1,
        row2_col2,
        row2_col3,
        row2_col4,
        winding,
        nde_bearing_temp,
        de_bearing_temp
      ] = await Promise.all([
        this.getData("table_row1_col1").catch(err => ({
          success: false,
          error: err,
          data: null
        })),
        this.getData("table_row1_col2_row2").catch(err => ({
          success: false,
          error: err,
          data: null
        })),
        this.getData("table_row1_col2_row1").catch(err => ({
          success: false,
          error: err,
          data: null
        })),
        this.getData("table_row1_col3_row1").catch(err => ({
          success: false,
          error: err,
          data: null
        })),
        this.getData("table_row1_col4_row1").catch(err => ({
          success: false,
          error: err,
          data: null
        })),
        this.getData("table_row1_col2_row3").catch(err => ({
          success: false,
          error: err,
          data: null
        })),
        this.getData("table_row2_col1").catch(err => ({
          success: false,
          error: err,
          data: null
        })),
        this.getData("table_row2_col2").catch(err => ({
          success: false,
          error: err,
          data: null
        })),
        this.getData("table_row2_col3").catch(err => ({
          success: false,
          error: err,
          data: null
        })),
        this.getData("table_row2_col4").catch(err => ({
          success: false,
          error: err,
          data: null
        })),
        this.getData("winding").catch(err => ({
          success: false,
          error: err,
          data: null
        })),
        this.getData("nde_bearing_temp").catch(err => ({
          success: false,
          error: err,
          data: null
        })),
        this.getData("de_bearing_temp").catch(err => ({
          success: false,
          error: err,
          data: null
        }))
      ]);
      return {
        error: null,
        data: {
          row1_col1: row1_col1.data,
          row1_col2_row2: row1_col2_row2.data,
          row1_col2_row1: row1_col2_row1.data,
          row1_col3_row1: row1_col3_row1.data,
          row1_col4_row1: row1_col4_row1.data,
          row1_col2_row3: row1_col2_row3.data,
          row2_col1: row2_col1.data,
          row2_col2: row2_col2.data,
          row2_col3: row2_col3.data,
          row2_col4: row2_col4.data,
          winding: winding.data,
          nde_bearing_temp: nde_bearing_temp.data,
          de_bearing_temp: de_bearing_temp.data
        }
      };
    } catch (err) {
      return {
        error: err,
        data: null
      };
    }
  }
}

/*
   "dg_overview-row1_col2",
   "dg_overview-row2_col2",
   "dg_overview-row3_col2",
   "dg_overview-row4_col2",
*/

const row1col1dgBlock = [
  "dg_overview-row1_col1_dg1",
  "dg_overview-row1_col1_dg2",
  "dg_overview-row1_col1_dg3",
  "dg_overview-row1_col1_dg4"
];

const getRow1Col1DataAPI = async () => {
  try {
    const [
      [dg1Data, dg1Err],
      [dg2Data, dg2Err],
      [dg3Data, dg3Err],
      [dg4Data, dg4Err]
    ] = await Promise.all(row1col1dgBlock.map(x => getMQTTDataSecAPI(x)));
    if (dg1Err && dg2Err && dg3Err && dg4Err) {
      return [null, dg1Err];
    }
    const data = dtoToDgOverviewRow1Col1(dg1Data, dg2Data, dg3Data, dg4Data);
    return [data, null];
  } catch (err) {
    return [null, err.message];
  }
};

const getRow1Col2DataAPI = async () => {
  try {
    const [data, err] = await getMQTTDataSecAPI("dg_overview-row1_col2");
    if (data) {
      const dto = dtoToGE(data);
      return [dto, null];
    }
    return [null, err];
  } catch (err) {
    return [null, err.message];
  }
};

const getRow2Col2DataAPI = async () => {
  try {
    const [data, err] = await getMQTTDataSecAPI("dg_overview-row2_col2");
    if (data) {
      const dto = dtoToGE(data);
      return [dto, null];
    }
    return [null, err];
  } catch (err) {
    return [null, err.message];
  }
};

const getRow3Col2DataAPI = async () => {
  try {
    const [data, err] = await getMQTTDataSecAPI("dg_overview-row3_col2");
    if (data) {
      const dto = dtoToGE(data);
      return [dto, null];
    }
    return [null, err];
  } catch (err) {
    return [null, err.message];
  }
};

const getRow4Col2DataAPI = async () => {
  try {
    const [data, err] = await getMQTTDataSecAPI("dg_overview-row4_col2");
    if (data) {
      const dto = dtoToGE(data);
      return [dto, null];
    }
    return [null, err];
  } catch (err) {
    return [null, err.message];
  }
};

export default {
  DgData,
  getRow1Col1DataAPI,
  getRow1Col2DataAPI,
  getRow2Col2DataAPI,
  getRow3Col2DataAPI,
  getRow4Col2DataAPI
};
