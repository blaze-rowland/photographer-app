'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with contracts
 */
const Database = use('Database');
const Contract = use('App/Models/Contract');
const ServiceAuthorizationService = use('App/Services/ServiceAuthorizationService');

class ContractController {
  /**
   * Show a list of all contracts.
   * GET contracts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ auth, params }) {
    const serviceId = params.serviceId;

    const contracts = await Database
      .table('contracts')
      .select('*')
      .where('service_id', serviceId);

    return contracts;
  }

  /**
   * Create/save a new contract.
   * POST contracts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    // Retrieve new contract from payload
    const { dateOfAppointment, signed, serviceId } = request.all();

    const contract = await Contract.create({
      date_of_appointment: dateOfAppointment,
      signed,
      service_id: serviceId
    });

    return response.status(200).send(contract);
  }

  /**
   * Display a single contract.
   * GET contracts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update contract details.
   * PUT or PATCH contracts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, auth }) {
    // Get Authenticated user
    const user = await auth.getUser();

    // Get id of Contract from URL
    const id = params.id;
    const { dateOfAppointment, signed, serviceId } = request.all();

    // Find contract based on ID
    const contract = await Contract.find(id);
    
    // Get service
    const service = await Database
      .table('services')
      .select('*')
      .where('id', contract.service_id)
      .first();
    
    // Get client
    const client = await Database
      .table('clients')
      .select('*')
      .where('id', service.client_id)
      .first();

    // Make sure the user is authenticated and contract exists
    ServiceAuthorizationService.verifyPermission(contract, service, client, user);

    // Take the body and merge it into the contract
    contract.merge({
      date_of_appointment: dateOfAppointment,
      signed,
      service_id: serviceId
    });

    // Update the contract and save
    await contract.save();

    // Return updated contract
    return contract;
  }

  /**
   * Delete a contract with id.
   * DELETE contracts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response, auth }) {
    // Get authenticated user
    const user = await auth.getUser();

    // Get id of Contract from URL
    const id = params.id;

    // Find contract based on ID
    const contract = await Contract.find(id);

    // Get service
    const service = await Database
      .table('services')
      .select('*')
      .where('id', contract.service_id)
      .first();

    // Get client
    const client = await Database
      .table('clients')
      .select('*')
      .where('id', service.client_id)
      .first();

    // Make sure the user is authenticated and contract exists
    ServiceAuthorizationService.verifyPermission(contract, service, client, user);

    // Delete contract from database
    await contract.delete();

    // Update the contract and save
    await contract.save();

    // Return deleted contract
    return contract;
  }
}

module.exports = ContractController
