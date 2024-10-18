import { Router } from "express";
import { Alerts, Database, Telemetry } from "../controllers/index.js";

export const router = Router();

router.get("/api/ping-status", Telemetry.pingStatus);
router.get("/api/bandwidth-status", Telemetry.bandWidthStatus);
router.get("/api/transbox-storage", Telemetry.transboxStorage);
router.get("/api/table", Database.tableData);
router.get("/api/alert-check", Alerts.checkAlerts);
