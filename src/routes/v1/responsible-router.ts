import { Router } from "express";
import * as responsibleController from "../../controllers/v1/responsible-controller";


const router = Router();

router.get("", responsibleController.getResponsibleController);


export default router;
