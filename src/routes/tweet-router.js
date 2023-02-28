import { Router } from "express";
import tweetController from "../controllers/tweet-controller.js";


const tweetRouter = Router();

tweetRouter.post('', tweetController.postTweet);


export { tweetRouter };
