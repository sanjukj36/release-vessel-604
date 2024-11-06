import path from "path";
import { fileURLToPath } from "url";
import { Service } from "node-windows";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svc = new Service({
  name: "NODE-AMS-Rawabi",
  description: "AMS Client Application",
  script: path.join(__dirname, "server", "index.js")
});

svc.on("uninstall", function () {
  console.log("Service uninstalled");
});

svc.uninstall();
