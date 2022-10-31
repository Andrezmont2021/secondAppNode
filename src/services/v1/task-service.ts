import { Model } from "sequelize";
import { Responsible } from "../../db/models/responsible.model";
import { Task } from "../../db/models/task.model";

export const getTasksService = async (): Promise<any> => {
  const results = await Task.findAll({
    order: [["id", "ASC"]],
    include: ["responsible"],
  });
  return results;
};

export const createTaskService = async (data: any): Promise<any> => {
  let responsible: Model<any, any>;
  if (data.responsible) {
    responsible = await Responsible.create(data.responsible);
  }
  const result = await Task.create({
    ...data,
    responsible_id: responsible!.getDataValue("id"),
  });
  return {
    isOk: true,
    message: "Task created",
    result,
  };
};

export const updateTaskService = async (
  id: number,
  data: any
): Promise<any> => {
  const taskFound = await Task.findByPk(id);
  if (taskFound) {
    const result = await taskFound.update(data);
    return {
      isOk: true,
      message: "Task updated",
      result,
    };
  } else {
    return {
      isOk: false,
      message: "Task not found",
    };
  }
};

export const deleteTaskService = async (id: number): Promise<any> => {
  const taskFound = await Task.findByPk(id);
  if (taskFound) {
    await taskFound.destroy();
    return {
      isOk: true,
      message: "Task deleted",
    };
  } else {
    return {
      isOk: false,
      message: "Task not found",
    };
  }
};
