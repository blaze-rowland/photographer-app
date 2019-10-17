'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('register', 'UserController.register');
  Route.post('login', 'UserController.login');
}).prefix('auth');

Route.group(() => {
  Route.resource('billing', 'BillingController').middleware('auth');
  Route.resource('client', 'ClientController').middleware('auth');
  Route.resource('contract', 'ContractController').middleware('auth');
  Route.resource('service', 'ServiceController').middleware('auth');
}).prefix('api');
