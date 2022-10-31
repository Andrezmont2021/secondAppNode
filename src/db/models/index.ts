import { Sequelize } from "sequelize";
import { Responsible } from "./responsible.model";
import { Task } from "./task.model";

export const setupModels = (sequelize: Sequelize) => {
  Task.initialize(sequelize);
  Responsible.initialize(sequelize);

  Task.associate(sequelize.models);
  Responsible.associate(sequelize.models);
};
