import express from "express";
import { getHomepageData, postHomepageData } from "../controllers/adminHomePageController";
import { postServicepageData, getServicepageData } from "../controllers/adminServicePageController";
import { postAboutpageData, getAboutpageData } from "../controllers/adminAboutPageController";
import { getCommonpageData, postCommonpageData } from "../controllers/adminCommonPageController";
import { login } from "../controllers/userController";
import { checkUser } from "../controllers/userController";

const router = express.Router();

router.post("/homepage", postHomepageData);
router.get("/gethomepage", getHomepageData);

router.post("/servicepage", postServicepageData);
router.get("/getservicepage", getServicepageData);

router.post("/aboutpage", postAboutpageData);
router.get("/getaboutpage", getAboutpageData);

router.post("/commonpage", postCommonpageData);
router.get("/getcommonpage", getCommonpageData);

router.post("/login", login);

router.post("/checkUser", checkUser);

export default router;