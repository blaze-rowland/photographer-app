'use strict'

const Model = use('Model');

class Billing extends Model {
    service() {
        return this.belongsTo('App/Models/Service');
    }
}

module.exports = Billing;