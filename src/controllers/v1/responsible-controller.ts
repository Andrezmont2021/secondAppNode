import { Request, Response } from "express";
import { getResponsibleService } from "../../services/v1/responsible-service";

export const getResponsibleController = async (req: Request, res: Response) => {
  const result = await getResponsibleService();
  if (result) {
    res.send(result);
  } else {
    res.status(500).send("Error when try to get responsibles");
  }
};
