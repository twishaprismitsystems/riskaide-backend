import { NextFunction, Request, Response } from "express";
import homePageModel from "../models/homePageModel";
import utils from "../utils/utils";

export const getAllHomePageInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await homePageModel.find({}).exec();
    if (result) {
      res.json(utils.getResponse(false, result, "home page data."));
    } else {
      throw new Error("Error occurred while getting home page data!");
    }
  } catch (ex: any) {
    next(ex);
  }
};

