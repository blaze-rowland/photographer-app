# Photography App
A Photography application for photographers, built by photographers

## Technologies
* Angular 7
* Adonis.JS
* TypeScript
* JavaScript ES6
* SASS/SCSS

## What's Included?
Well... Nothing yet.. :(

## What's Coming?
* Register / Login
* Creation of Clients
* Create a contract for specific clients
* Create a service for the client (e.g. Mini Sessions, Full Sessions, Senior Sessions, etc.)
* Bill your client with our invoice system
* Prompts for your sessions
* View photos (w/ watermark)

## How do I use it?

 1. Go to the app
 2. Create an account via our registration page.
 3. Add a client through the creation page.
	 * Client Name, Email Address, Physical Address, Phone Number
 4. Add a service for the client
	 * Service Name (e.g. Full Session), Price, Quantity (defaults to 1), Due Date (on your part)
 5. Create a Contract 
	 * Either select a default template for the contract or type out your own information
	 * Date of Appointment, Cancellation Fee, No-Show Fee, Re-Scheduling Fee 
		 * After creating a contract you will receive a shareable link for your client. When they open the link they will be 			prompted to read the contract and type / sign their signature at the bottom. This will then send you back a signed copy showing that they understand things like the following:
			 * Cancellation Fee: $20
			 * No-Show Fee: $50
			 * Re-Scheduling Fee: $10
 6.  After the session you are able to send an invoice given the client information you collected initially. 
	 * See if they've viewed your Invoice
	 * You can send alerts (*all will have confirmation dialog*): 
		*  Reminders if payment hasn't been received
		 * Warnings if payment is late and invoice has been viewed
		 * You can send an action letter if payment is 2 weeks late informing them you're planning to take legal action. 
