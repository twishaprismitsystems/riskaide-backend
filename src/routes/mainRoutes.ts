import express from "express";
import aboutPageRoutes from "./aboutPageRoutes";
import commonRoutes from "./commonRoutes";
import homePageRoutes from "./homePageRoutes";
import servicePageRoutes from "./servicePageRoutes";
import adminPageRoutes from "./adminPageRoutes";
const router = express.Router();

router.use("/admin", adminPageRoutes);
router.use("/common", commonRoutes);
router.use("/homePage", homePageRoutes);
router.use("/servicePage", servicePageRoutes);
router.use("/aboutPage", aboutPageRoutes);

export default router;
