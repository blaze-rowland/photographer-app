'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Service extends Model {
    client() {
        return this.belongsTo('App/Models/Client');
    }

    contracts() {
        return this.hasOne('App/Models/Contract');
    }

    billings() {
        return this.hasOne('App/Models/Billing');
    }
}

module.exports = Service
