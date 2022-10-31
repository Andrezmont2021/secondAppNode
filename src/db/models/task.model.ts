import { Model, Sequelize } from "sequelize";
import { TASK_DB_NAME, taskSchema } from "../schemas/task.schema";

export class Task extends Model {
  static associate(models: any) {
    // Relationship with Responsible
    Task.belongsTo(models.Responsible, {
      as: "responsible",
      foreignKey: "responsibleId",
      onDelete: "SET NULL",
      onUpdate: "SET NULL",
    });
  }
  static initialize(sequelize: Sequelize) {
    return this.init(taskSchema, {
      sequelize,
      tableName: TASK_DB_NAME,
      timestamps: false,
    });
  }
}
