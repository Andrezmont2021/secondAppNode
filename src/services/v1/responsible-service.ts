import { Responsible } from "../../db/models/responsible.model";

export const getResponsibleService = async (): Promise<any> => {
  const results = await Responsible.findAll({
    order: [["id", "ASC"]],
    include: ["task"],
  });
  return results;
};

