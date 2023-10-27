import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import md5 from 'md5'
import userModel from "../models/userModel";
import { checkToken } from '../services/authService'

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    
    const { username, password } = req.body.data;
    const secret = process.env.JWT_SECRET;

    if(!secret){
      return res.status(401).json({ message: 'something went wrong' });
    }

    const user = await userModel.findOne({ username: username });

    if (!user || validatePassword(user, password)) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign(
      { userId: user._id },
      secret,
      { expiresIn: '8h' }
    );
    res.setHeader('Set-Cookie', `token=${token}; HttpOnly`);
    res.status(200).json({ token });
  } catch (ex: any) {
    next(ex);
  }
};

const validatePassword = (user: any, password: string) => {
  if(user.password !== md5(password)){
    return true;
  }
  return false;
}

export const checkUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    
    const { token } = req.body.data;
    const secret = process.env.JWT_SECRET;

    if(!secret){
      return res.status(401).json({ message: 'something went wrong' });
    }

    if (checkToken(token, secret)) {
      res.status(200).json({ inValid: true });
    }else{
      res.status(200).json({ inValid: false });
    }
  } catch (ex: any) {
    next(ex);
  }
}