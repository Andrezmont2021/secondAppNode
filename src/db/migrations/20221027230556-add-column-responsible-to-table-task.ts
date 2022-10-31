"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: any) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    /**await queryInterface.addColumn(
      taskDBName,
      "responsible",
      taskSchema.responsible
    );*/
  },

  async down(queryInterface: any) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    /**await queryInterface.removeColumn(
      taskDBName,
      "responsible",
      taskSchema.responsible
    );*/
  },
};
