import { ObjectSchema, ValidationError, ValidationErrorItem } from "joi";
import { Request, Response, NextFunction } from "express";

export const validatorHandler = (schema: ObjectSchema, property: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = retrieveInformationFromRequest(property, req);
    const { error } = schema.validate(data);
    if (!error) {
      next();
    } else {
      const message = showValidatorErrors(error);
      res.status(422).json({ error: message });
    }
  };
};

const retrieveInformationFromRequest = (
  property: string,
  req: Request
): any => {
  let data = null;
  if (property === "params") {
    data = req.params;
  } else if (property === "body") {
    data = req.body;
  } else {
    data = req.query;
  }
  return data;
};

const showValidatorErrors = (error: ValidationError): string => {
  const { details } = error;
  const message = details.map((i: ValidationErrorItem) => i.message).join(",");
  console.log("error", message);
  return message;
};
