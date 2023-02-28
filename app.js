import express, { json } from 'express';
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from './src/routes/users-router.js';
import { tweetRouter } from './src/routes/tweet-router.js';
//import router from "./routers/index.router.js";

dotenv.config();

const app = express();

app
  .use(cors())
  .use(json())
  .get('/health', (_req, res) => res.send("OK!"))
  .use('/sign-up', userRouter)
  .use('/tweets', tweetRouter);

app.listen(process.env.PORT, () => {
    console.log("Magic happens on port " + process.env.PORT);
});