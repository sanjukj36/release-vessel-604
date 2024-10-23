import { getMQTTDataAPI } from "../mqtt/api";
import { dtoToMiscellaneous } from "./dtoToMiscellaneous";

/**
 * @returns {Promise<Array<null, "data" | null, "Error">>}
 */
const getMiscellaneousDataAPI = async () => {
  return getMQTTDataAPI("miscellaneous")
    .then(res => {
      if (res.status === 200) {
        // handle success response.
        const { data } = res.data;
        const dtoTodata = dtoToMiscellaneous(data);
        return [dtoTodata, null];
      } else {
        // handle negative response.
        return [null, "Oops Something went wrong. Please try again latter"];
      }
    })
    .catch(err => {
      const { response } = err;
      if (response) {
        return [null, response.message];
      }
      return [null, err.message];
    });
};

export default { getMiscellaneousDataAPI };
