import cors from "cors";
import { config } from "dotenv";
import express from "express";
import { router } from "./routes/index.js";

config();

const PORT = process.env.PORT || 3000;
const IP = process.env.IP || "127.0.0.1";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.status(200).json({ success: true, error: null, data: "working" });
});

app.listen(PORT, IP, () => {
  console.log(`Server is running at 'http://${IP}:${PORT}'`);
});
