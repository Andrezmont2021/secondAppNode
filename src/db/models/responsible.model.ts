import { Model, Sequelize } from "sequelize";
import {
  RESPONSIBLE_DB_NAME,
  responsibleSchema,
} from "../schemas/responsible.schema";

export class Responsible extends Model {
  static associate(models: any) {
    // One to One relationship with Task
    this.hasOne(models.Task, {
      as: "task",
      foreignKey: "responsibleId",
    });
  }

  static initialize(sequelize: Sequelize) {
    return this.init(responsibleSchema, {
      sequelize,
      tableName: RESPONSIBLE_DB_NAME,
      timestamps: false,
    });
  }
}
