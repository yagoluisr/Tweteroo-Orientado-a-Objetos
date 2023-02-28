import { Router } from "express";
import User from "../controllers/user-controller.js";

const userRouter = Router();

userRouter.post('', User.userPost);

export { userRouter };