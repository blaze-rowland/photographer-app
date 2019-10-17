'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BillingSchema extends Schema {
  up () {
    this.create('billings', (table) => {
      table.increments();
      table.boolean('completed').notNullable().defaultTo(false);
      table.boolean('viewed').notNullable().defaultTo(false);

      table.integer('service_id', 25).notNullable();
      table.timestamps();
    });
  }

  down () {
    this.drop('billings');
  }
}

module.exports = BillingSchema;
