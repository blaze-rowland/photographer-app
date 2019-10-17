'use strict'

const User = use('App/Models/User');

class UserController {
    async register({request}) {
        const { firstName, lastName, email, password } = request.all();

        await User.create({
            first_name: firstName,
            last_name: lastName,
            email,
            password
        });

        return this.login(...arguments);
    }

    async login({ request, auth }) {
        const { email, password } = request.only(['email', 'password']);
        const token = await auth.attempt(email, password);

        return token;
    }
}

module.exports = UserController;
