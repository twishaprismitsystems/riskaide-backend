import { NextFunction, Request, Response } from "express";
import homePageModel from "../models/homePageModel";
import { checkToken } from '../services/authService'
import utils from "../utils/utils";

export const postHomepageData = async (
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
          const homeData = new homePageModel({
            ...req.body.data,
          });
          result = await homeData.save();
        } else {
          result = await homePageModel.findByIdAndUpdate(
            { _id: req.body.id },
            { ...req.body.data }
          );
        }
        if (result) {
          res.status(200).send({
            error: false,
            message: "Home page data Updated"
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

export const getHomepageData = async (
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
        const result = await homePageModel.find({}).exec();
        if (result) {
          res.json(utils.getResponse(false, result[0], "home page data."));
        } else {
          throw new Error("Error occurred while getting about page data!");
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