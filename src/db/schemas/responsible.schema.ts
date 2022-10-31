import { DataTypes } from "sequelize";

export const RESPONSIBLE_DB_NAME = "responsible";

export const responsibleSchema = {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateOfBirth: {
    type: DataTypes.DATE,
    allowNull: false
  },
};
