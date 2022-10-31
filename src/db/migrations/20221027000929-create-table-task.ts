"use strict";

import { taskSchema, TASK_DB_NAME } from "../schemas/task.schema";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: any) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(TASK_DB_NAME, taskSchema);
  },

  async down(queryInterface: any) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(TASK_DB_NAME);
  },
};
