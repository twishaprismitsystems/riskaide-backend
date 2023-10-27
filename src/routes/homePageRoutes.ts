import express from "express";
import { getAllHomePageInfo } from "../controllers/homePageController";

const router = express.Router();
router.get("/", getAllHomePageInfo);

export default router;
