import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import path from "path";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import { router } from "./routes/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

config();

const PORT = process.env.PORT || 3000;
const IP = process.env.IP || "127.0.0.1";
const NODE_ENV = process.env.MODE;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) =>
    res.send("DEVELOPMENT MODE!!! Please set to Production...")
  );
}

app.listen(PORT, IP, () => {
  console.log(`Server is running at 'http://${IP}:${PORT}'`);
});
