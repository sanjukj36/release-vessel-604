import axios from "axios";

export const apiClient = async (method, url, data, headers) => {
  const config = {
    method,
    url,
    data,
    headers: headers ?? { "Content-type": "application/json" }
  };
  return await axios(config);
};
