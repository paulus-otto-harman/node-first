import express, { Express, Request, Response } from "express";
import favicon from "serve-favicon";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(favicon(path.join("public", "favicon.ico")));

app.get("/", (req: Request, res: Response) => {
  res.send("Halo Dunia!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
