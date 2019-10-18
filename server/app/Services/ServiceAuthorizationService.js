const InvalidAccessException = use('App/Exceptions/InvalidAccessException');
const ResourceNotExistException = use('App/Exceptions/ResourceNotExistException');

class ClientAuthorizationService {
    verifyPermission(resource, service, client, user) {
        if (!resource) throw new ResourceNotExistException();

        if (resource.service_id !== service.id) throw new InvalidAccessException();
        if (client.user_id !== user.id) throw new InvalidAccessException();
    };
}

module.exports = new ClientAuthorizationService();