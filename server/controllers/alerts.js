import axios from "axios";
import { config } from "dotenv";

config();

const IP = process.env.IP;
const PORT = process.env.PORT;

const SERVER_URI = `http://${IP}:${PORT}`;

export const checkAlerts = async (req, res) => {
  try {
    const response = await axios.get(`${SERVER_URI}/api/bandwidth_status`);
    if (response.status === 200) {
      const { data } = response;
      return res.status(200).json({ success: true, data, error: null });
    }
    return res.status(200).json({ success: false, data: null, error: null });
  } catch (err) {
    res.status(400).json({ error: err, data: null, success: false });
  }
};
