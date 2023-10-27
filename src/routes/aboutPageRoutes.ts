import express from "express";
import { getAllAboutPageInfo } from "../controllers/aboutPageController";
const router = express.Router();

router.get("/", getAllAboutPageInfo);

export default router;
