'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {
    users() {
        return this.belongsToMany('App/Models/User');
    }

    services() {
        return this
            .hasMany('App/Models/Service')
            .pivotTable('client_service');

    }
}

module.exports = Client
