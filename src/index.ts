// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import Logger from "@utils/logger";

import morganMiddleware from '@configs/morganMiddleware'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(morganMiddleware)


app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server Intialization");

});

app.listen(port, () => {
  // Logger.error("This is an error log");
  // Logger.warn("This is a warn log");
  // Logger.info("This is a info log");
  // Logger.http("This is a http log");
  // Logger.debug("This is a debug log");
  Logger.info("[server]: Server is running at http://localhost:"+ {port});
});