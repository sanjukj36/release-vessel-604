import fs from "fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// NOTE:production mode.
// const mqtt_live_data_path = 'C:\\speed_test\\output.json';
// const transbox_path = 'C:\\speed_test\\storage_details.json';
// const ping_status_path = 'C:\\speed_test\\ping_status.json';
// const bandwidth_path = 'C:\\speed_test\\connection_status.json';

//NOTE:development mode.
const ping_status_path = path.join(
  // eslint-disable-next-line no-undef
  __dirname,
  "..",
  "dummy",
  "ping-status.json"
);
// eslint-disable-next-line no-undef
const bandwidth_path = path.join(__dirname, "..", "dummy", "bandwidth.json");
const transbox_path = path.join(
  // eslint-disable-next-line no-undef
  __dirname,
  "..",
  "dummy",
  "storage_details.json"
);

export const bandWidthStatus = async (req, res) => {
  try {
    const fileData = fs.readFileSync(bandwidth_path, "utf8");
    const data = JSON.parse(fileData);

    let range = 100;
    let downLoadSpeed = 0;

    if (data?.internet_connection) {
      const randomValue = Math.floor(Math.random() * 10);
      downLoadSpeed = 30 + randomValue;
    }

    const newData = {
      download_speed: downLoadSpeed,
      range
    };

    res.status(200).json(newData);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const pingStatus = async (req, res) => {
  try {
    const fileData = fs.readFileSync(ping_status_path, "utf8");
    const { data } = JSON.parse(fileData);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const transboxStorage = (req, res) => {
  try {
    const fileData = fs.readFileSync(transbox_path, "utf8");
    const data = JSON.parse(fileData);

    const result = {
      free_storage: data?.windows?.free_gb,
      total_storage: data?.windows?.total_gb,
      used_storage: data?.windows?.used_gb
    };
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const secondHeader = (req, res) => {
  res.status(200).json(headerTags?.data);
};
