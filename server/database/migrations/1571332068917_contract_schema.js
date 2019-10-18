'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContractSchema extends Schema {
  up () {
    this.create('contracts', (table) => {
      table.increments();
      table.date('date_of_appointment', 100).notNullable();
      table.boolean('signed').notNullable().defaultTo(false);

      table.integer('service_id', 25).unsigned().references('id').inTable('services');
      table.timestamps();
    });
  }

  down () {
    this.drop('contracts');
  }
}

module.exports = ContractSchema;
