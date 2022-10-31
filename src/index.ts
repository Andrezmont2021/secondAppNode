import express, { Application, Request, Response } from "express";
import { config } from "./config/config";
import connectDB from "./db/config/sequelize";
import routesV1 from "./routes/v1";

const app: Application = express();
const PORT = config.port;

app.use(express.json());
routesV1(app);

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send(req.body.name);
});

//Connect to the db (sequelize)
connectDB().authenticate().then(() => console.log("Database connected"));

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
