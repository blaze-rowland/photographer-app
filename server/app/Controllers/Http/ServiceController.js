'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with services
 */
const Database = use('Database');
const Service = use('App/Models/Service');
const ClientAuthorizationService = use('App/Services/ClientAuthorizationService');

class ServiceController {
  /**
   * Show a list of all services.
   * GET services
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ auth, params }) {
    // Get Authenticated User
    const user = await auth.getUser();

    const clientId = params.clientId;

    const services = await Database
      .table('services')
      .select('*')
      .where('client_id', clientId);

    return services;
  }


  /**
   * Create/save a new service.
   * POST services
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, response }) {
    // Get Authenticated user
    const user = await auth.getUser();

    // Retrieve new service from payload
    const { name, price, quantity, dueDate, clientId } = request.all();
    
    const service = await Service.create({
      name,
      price,
      quantity,
      due_date: dueDate,
      client_id: clientId
    });

    return response.status(200).send(service);
  }

  /**
   * Update service details.
   * PUT or PATCH services/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, auth }) {
    // Get authenticated user
    const user = await auth.getUser();
    
    // Get id of Service from URL
    const id = params.id;
    const { name, price, quantity, dueDate, paid, clientId } = request.all();

    // Find service based on ID
    const service = await Service.find(id);

    // Get client
    const client = await Database
      .table('clients')
      .select('*')
      .where('id', service.client_id)
      .first();

    // Make sure the user is authenticated and service exists
    ClientAuthorizationService.verifyPermission(service, client, user);

    // Take the body and merge it into the service
    service.merge({
      name,
      price,
      quantity,
      due_date: dueDate,
      paid, 
      client_id: clientId
    });

    // Update the service and save
    await service.save();

    // Return updated service
    return service;
  }

  /**
   * Delete a service with id.
   * DELETE services/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response, auth }) {
      // Get authenticated user
      const user = await auth.getUser();
    
      // Get id of Service from URL
      const id = params.id;
  
      // Find service based on ID
      const service = await Service.find(id);
  
      // Get client
      const client = await Database
        .table('clients')
        .select('*')
        .where('id', service.client_id)
        .first();
  
      // Make sure the user is authenticated and service exists
      ClientAuthorizationService.verifyPermission(service, client, user);
  
      // Delete service from database
      await service.delete();
  
      // Update the service and save
      await service.save();
  
      // Return deleted service
      return service;
  }
}

module.exports = ServiceController
