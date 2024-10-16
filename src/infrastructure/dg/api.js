import { getMQTTDataAPI } from "../mqtt/api";

export const getRow1Col1Data = async () => {
  try {
    const response = await getMQTTDataAPI("dg_dg1-table_row2_col2");
    if (response.status === 200) {
      const { data } = response.data;
      return { success: true, data, error: null };
    } else {
      return { success: false, error: null, data: [] };
    }
  } catch (err) {
    return { success: false, error: err, data: [] };
  }
};

/**
 * All API fetch class.
 */
export class DgData {
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
