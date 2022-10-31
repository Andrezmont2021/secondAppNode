import { Request, Response } from "express";
import {
  getTasksService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} from "../../services/v1/task-service";

export const getTaskController = async (req: Request, res: Response) => {
  const result = await getTasksService();
  if (result) {
    res.send(result);
  } else {
    res.status(500).send("Error when try to get tasks");
  }
};

export const createTaskController = async (req: Request, res: Response) => {
  const body = req.body;
  const result = await createTaskService(body);
  if (result.isOk) {
    res.send({
      message: result.message,
      result: result.result,
    });
  } else {
    res.status(500).send(result.message || "Error when try to create tasks");
  }
};

export const updateTaskController = async (req: Request, res: Response) => {
  const body = req.body;
  const { id } = req.params;
  const result = await updateTaskService(parseInt(id), body);
  if (result.isOk) {
    res.send({
      message: result.message,
      result: result.result,
    });
  } else {
    if (result.message) {
      res.status(404).send(result.message);
    } else {
      res.status(500).send("Error when try to update task");
    }
  }
};

export const deleteTaskController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await deleteTaskService(parseInt(id));
  if (result.isOk) {
    res.send({
      message: result.message,
    });
  } else {
    if (result.message) {
      res.status(404).send(result.message);
    } else {
      res.status(500).send("Error when try to delete task");
    }
  }
};
