import { NextFunction, Request, Response } from "express";
import servicePageModel from "../models/servicePageModel";
import utils from "../utils/utils";

export const getAllServicePageInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await servicePageModel.find({}).exec();
    if (result) {
      res.json(utils.getResponse(false, result, "Service page data."));
    } else {
      throw new Error("Error occurred while getting service page data!");
    }
  } catch (ex: any) {
    next(ex);
  }
};
