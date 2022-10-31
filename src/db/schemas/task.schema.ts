import { DataTypes } from "sequelize";
import { Responsible } from "../models/responsible.model";

export const TASK_DB_NAME = "task";

export const taskSchema = {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  responsibleId: {
    type: DataTypes.INTEGER,
    field: "responsible_id"
  },
};
