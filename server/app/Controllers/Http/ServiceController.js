'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with services
 */
const Service = use('App/Models/Service');
const AuthorizationService = use('App/Services/AuthorizationService');

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
  async index ({ auth }) {
    // Get Authenticated User
    const user = await auth.getUser();

    // Return user's services
    return await user.clients().services().fetch();
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
    const { name, price, quantity, dueDate } = request.all();

    const service = new Service();

    service.fill({
      name,
      price,
      quantity,
      due_date: dueDate
    });

    // await user.clients().services().save(service);
    const clients = await user.clients().fetch();

    // TODO: Figure out how to get services from clients table
    
    // response.status(200).send(clients.id);

    let clientArr = [];
    
    await Array.from(clients).forEach(client => {
      clientArr.push(client.id);
    });

    return response.status(200).send(clientArr);
    


    // return service;
  }

  /**
   * Display a single service.
   * GET services/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing service.
   * GET services/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update service details.
   * PUT or PATCH services/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a service with id.
   * DELETE services/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ServiceController
