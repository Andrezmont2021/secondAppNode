"use strict";
import {
  RESPONSIBLE_DB_NAME,
  responsibleSchema,
} from "../schemas/responsible.schema";

module.exports = {
  async up(queryInterface: any) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(RESPONSIBLE_DB_NAME, responsibleSchema);
  },

  async down(queryInterface: any) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(RESPONSIBLE_DB_NAME);
  },
};
