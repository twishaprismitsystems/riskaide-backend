import { NextFunction, Request, Response } from "express";
import servicePageModel from "../models/servicePageModel";
import { checkToken } from '../services/authService'
import utils from "../utils/utils";

export const postServicepageData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  try {
    if(req.headers.token){
      const secret = process.env.JWT_SECRET;
      const token = req.headers.token;
      if(!secret){
        return res.status(401).json({ message: 'something went wrong with secret' });
      }
      //@ts-ignore
      if(!checkToken(token, secret)){
        let result: any;
        if (req.body.id === null) {
          const serviceData = new servicePageModel({
            ...req.body.data,
          });
          result = await serviceData.save();
        } else {
          result = await servicePageModel.findByIdAndUpdate(
            { _id: req.body.id },
            { ...req.body.data }
          );
        }
        if (result) {
          res.status(200).send({
            error: false,
            message: "Service page data Updated"
          });
        } else {
          throw new Error("Error occurred while getting about page data!");
        }
      }else{
        res.status(200).send({
          error: true,
          message: "Token Expired"
        });
      }
    }else{
      res.status(200).send({
        error: true,
        message: "Unauthorized User"
      });
    }
  } catch (ex: any) {
  //   next(ex);
  }

};

export const getServicepageData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.headers.token) {
      const secret = process.env.JWT_SECRET;
      const token = req.headers.token;
      if (!secret) {
        return res
          .status(401)
          .json({ message: "something went wrong with secret" });
      }
      //@ts-ignore
      if (!checkToken(token, secret)) {
        const result = await servicePageModel.find({}).exec();
        if (result) {
          res.json(utils.getResponse(false, result[0], "service page data."));
        } else {
          throw new Error("Error occurred while getting service page data!");
        }
      } else {
        res.status(200).send({
          error: true,
          message: "Token Expired",
        });
      }
    } else {
      res.status(200).send({
        error: true,
        message: "Unauthorized User",
      });
    }
  } catch (ex: any) {
    //   next(ex);
  }
};