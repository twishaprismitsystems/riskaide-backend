import express from "express";
import { getAllServicePageInfo } from "../controllers/servicePageController";
const router = express.Router();

router.get("/", getAllServicePageInfo);

export default router;
