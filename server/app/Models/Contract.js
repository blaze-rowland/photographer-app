'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Contract extends Model {
    service() {
        return this.belongsTo('App/Models/Service');
    }
}

module.exports = Contract
