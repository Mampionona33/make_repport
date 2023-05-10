import express, { Express, NextFunction, Request, Response } from "express";

export const app: Express = express();
app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Welcome to my api for make repport");
});
