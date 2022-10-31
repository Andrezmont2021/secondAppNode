import { Router } from "express";
import * as taskController from "../../controllers/v1/task-controller";
import { validatorHandler } from "../../middlewares/validator-handler";
import {
  taskSchema,
  idTaskSchema,
} from "../../validators/task-validator";

const router = Router();

router.get("", taskController.getTaskController);
router.post(
  "",
  validatorHandler(taskSchema, "body"),
  taskController.createTaskController
);
router.put(
  "/:id",
  validatorHandler(idTaskSchema, "params"),
  validatorHandler(taskSchema, "body"),
  taskController.updateTaskController
);
router.delete(
  "/:id",
  validatorHandler(idTaskSchema, "params"),
  taskController.deleteTaskController
);

export default router;
