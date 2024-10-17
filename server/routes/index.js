import { Router } from "express";
import { Database, Telemetry } from "../controllers/index.js";

export const router = Router();

router.get("/api/ping_status", Telemetry.pingStatus);
router.get("/api/bandwidth_status", Telemetry.bandWidthStatus);
router.get("/api/transbox_storage", Telemetry.transboxStorage);
router.get("/api/table", Database.tableData);
