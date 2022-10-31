import joi from "joi";

export const taskSchema = joi.object({
  title: joi.string().min(1).max(30).required(),
  completed: joi.boolean().required(),
  responsible: joi.object({
    name: joi.string().required(),
    dateOfBirth: joi.date().required()
  })
});

export const idTaskSchema = joi.object({
  id: joi.number().integer().required(),
});
