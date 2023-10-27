import { NextFunction, Request, Response } from "express";
import commonModel from "../models/commonModel";
import utils from "../utils/utils";

export const getHeaderInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await commonModel.find({}, { header: true }).exec();
    if (result) {
      res.json(utils.getResponse(false, result, "header page data."));
    } else {
      throw new Error("Error occurred while getting header page data!");
    }
  } catch (ex: any) {
    next(ex);
  }
};

export const getFooterInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await commonModel
      .find(
        {},
        {
          footerCard: true,
          footer: true,
          contactDetails: true,
          footerCompany: true,
          footerNavigation: true,
          footerService: true,
        }
      )
      .exec();
    if (result) {
      res.json(utils.getResponse(false, result, "home page data."));
    } else {
      throw new Error("Error occurred while getting home page data!");
    }
  } catch (ex: any) {
    next(ex);
  }
};

export const getClientInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await commonModel.find({}, { clients: true }).exec();
    if (result) {
      res.json(utils.getResponse(false, result, "Client data."));
    } else {
      throw new Error("Error occurred while getting client data!");
    }
  } catch (ex: any) {
    next(ex);
  }
};

export const getTestimonialList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await commonModel.find({}, { testimonial: true }).exec();
    if (result) {
      res.json(utils.getResponse(false, result, "Testimonial data."));
    } else {
      throw new Error("Error occurred while getting testimonial data!");
    }
  } catch (ex: any) {
    next(ex);
  }
};
