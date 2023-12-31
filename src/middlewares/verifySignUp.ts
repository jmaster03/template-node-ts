import { Request, Response } from 'express';

import User from "../models/User";
import { ROLES } from "../models/Role";


const checkDuplicateUsernameOrEmail = async (req: Request, res: Response, next: () => void) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user)
      return res.status(400).json({ message: "The user already exists" });
    const email = await User.findOne({ email: req.body.email });
    if (email)
      return res.status(400).json({ message: "The email already exists" });
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const checkRolesExisted = (req: Request, res: Response, next: () => void) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(400).json({
          message: `Role ${req.body.roles[i]} does not exist`,
        });
      }
    }
  }

  next();
};

export default {checkDuplicateUsernameOrEmail, checkRolesExisted}; 