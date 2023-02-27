import express, { json } from 'express';
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from './src/routes/users-router.js';
//import router from "./routers/index.router.js";

dotenv.config();

const app = express();

const usuarios = [];
const tweets = [];


app
  .use(cors())
  .use(json())
  .get('/health', (_req, res) => res.send("OK!"))
  .use('/sign-up', userRouter)

app.listen(process.env.PORT, () => {
    console.log("Magic happens on port " + process.env.PORT);
});