import { Sequelize } from "sequelize";
import { config } from "../../config/config";
import { setupModels } from "../models";

const connectDB = (): Sequelize => {
  const user = encodeURIComponent(config.dbUser as string);
  const password = encodeURIComponent(config.dbPassword as string);
  const uri = `postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

  const sequelize = new Sequelize(uri, {
    dialect: "postgres",
    logging: console.log,
  });

  setupModels(sequelize);

  return sequelize;
};

export default connectDB;
