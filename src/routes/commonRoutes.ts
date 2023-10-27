import express from "express";
import {
  getClientInfo,
  getFooterInfo,
  getHeaderInfo,
  getTestimonialList,
} from "../controllers/commonController";

const router = express.Router();
router.get("/headerInfo", getHeaderInfo);
router.get("/footerInfo", getFooterInfo);
router.get("/clientInfo", getClientInfo);
router.get("/testimonial", getTestimonialList);

export default router;
