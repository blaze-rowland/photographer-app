'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments();
      table.string('name', 255).notNullable();
      table.string('email', 255).notNullable();
      table.string('address', 255).notNullable();
      table.string('phone_number', 25).notNullable();

      table.number('user_id', 25).notNullable();
      table.timestamps();
    });
  }

  down () {
    this.drop('clients');
  }
}

module.exports = ClientSchema;
