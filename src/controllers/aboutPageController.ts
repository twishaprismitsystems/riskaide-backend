import { NextFunction, Request, Response } from "express";
import aboutPageModel from "../models/aboutPageModel";
import utils from "../utils/utils";

export const getAllAboutPageInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await aboutPageModel.find({}).exec();
    if (result) {
      res.json(utils.getResponse(false, result, "About page data."));
    } else {
      throw new Error("Error occurred while getting about page data!");
    }
  } catch (ex: any) {
    next(ex);
  }
};
