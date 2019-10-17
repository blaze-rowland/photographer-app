'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServiceSchema extends Schema {
  up () {
    this.create('services', (table) => {
      table.increments();
      table.string('name', 255).notNullable();
      table.integer('price', 25).notNullable();
      table.integer('quantity', 25).notNullable().defaultTo(1);
      table.date('due_date', 100).notNullable();
      table.boolean('paid').notNullable().defaultTo(false);

      table.integer('client_id', 25).notNullable();
      table.timestamps();
    });
  }

  down () {
    this.drop('services');
  }
}

module.exports = ServiceSchema;
