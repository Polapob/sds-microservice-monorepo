import express, { Application } from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import { specs } from "./swagger";

const ExpressConfig = (): Application => {
  const app = express();
  dotenv.config();
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
  return app;
};
export default ExpressConfig;
