import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser, { BodyParser } from "body-parser";
import path from "path";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
path.resolve();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
