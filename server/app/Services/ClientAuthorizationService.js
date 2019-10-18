const InvalidAccessException = use('App/Exceptions/InvalidAccessException');
const ResourceNotExistException = use('App/Exceptions/ResourceNotExistException');

class ClientAuthorizationService {
    verifyPermission(resource, client, user) {
        if (!resource) throw new ResourceNotExistException();

        if (resource.client_id !== client.id) throw new InvalidAccessException();
        if (client.user_id !== user.id) throw new InvalidAccessException();
    };
}

module.exports = new ClientAuthorizationService();