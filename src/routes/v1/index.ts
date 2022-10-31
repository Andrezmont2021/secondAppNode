import { Application } from "express";
import taskRouter from "./task-router";
import responsibleRouter from "./responsible-router";

/**
 * Function that contains the different end points to be accessed
 * @param {*} app: Express application
 */
export const routesV1 = (app: Application): void => {
  app.use("/api/v1/task", taskRouter);
  app.use("/api/v1/responsible", responsibleRouter);
};
// Export the apiV1
export default routesV1;
