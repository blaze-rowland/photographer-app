'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with clients
 */

 const Client = use('App/Models/Client');
 const AuthorizationService = use('App/Services/AuthorizationService');

class ClientController {
  /**
   * Show a list of all clients.
   * GET clients
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ auth }) {
    // Get Authenticated user
    const user = await auth.getUser();

    // Return users clients
    return await user.clients().fetch();
  }

  /**
   * Render a form to be used for creating a new client.
   * GET clients/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async store ({ auth, request }) {
    // Get Authenticated user
    const user = await auth.getUser();

    // Retrieve new client from payload
    const { name, email, address, phoneNumber } = request.all();

    const client = new Client();

    client.fill({
      name,
      email,
      address,
      phone_number: phoneNumber
    });

    await user.clients().save(client);

    return client;
  }

  /**
   * Display a single client.
   * GET clients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view, auth }) {
    // Get authenticated user
    const user = await auth.getUser();

    // Get id of client from URL
    const { id } = params.id;

    // Find the client based on ID
    const client = await Client.find(id);

    // Return the found client
    return client;
  }

  /**
   * Update client details.
   * PUT or PATCH clients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, auth }) {
    // Get authenticated user
    const user = await auth.getUser();

    // Get id of client from URL
    const { id } = params;

    // Find client based on ID
    const client = await Client.find(id);

    // Make sure the user is authenticated and client exists
    AuthorizationService.verifyPermission(client, user);

    // Take the body and merge it into the client
    client.merge(request.all());

    // Update the client and save
    await client.save();

    // Return updated client
    return client;

  }

  /**
   * Delete a client with id.
   * DELETE clients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response, auth }) {
    // Get authenticated user
    const user = await auth.getUser();

    // Get Id of client you want to delete from URL
    const { id } = params;

    // Find client based on ID
    const client = await Client.find(id);

    // Make sure the user is authenticated and project exists
    AuthorizationService.verifyPermission(client, user);

    // Delete client from database
    await client.delete();

    // Return deleted client
    return client;
  }
}

module.exports = ClientController;
