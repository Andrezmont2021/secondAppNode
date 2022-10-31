import { config } from "../../config/config";

const user = encodeURIComponent(config.dbUser as string);
const password = encodeURIComponent(config.dbPassword as string);

// File for configure db for migrations
module.exports = {
  development: {
    username: user,
    password: password,
    database: config.dbName,
    host: config.dbHost,
    dialect: "postgres",
  },
  production: {
    username: user,
    password: password,
    database: config.dbName,
    host: config.dbHost,
    dialect: "postgres",
  },
};
