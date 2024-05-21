const { UsersModels } = require("../model/users.model");

class AuthRepository {
    async loginRequest(username) {
        return UsersModels.query().findOne({username})
    }
}

module.exports = new AuthRepository();