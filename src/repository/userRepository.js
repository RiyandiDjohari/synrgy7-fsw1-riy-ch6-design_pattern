const { UsersModels } = require("../model/users.model");

class UserRepository {
    async getUsersLength() {
        return (await UsersModels.query()).length;
    }

    async findAll() {
        return UsersModels.query();
    }

    async findById(id) {
        return UsersModels.query().findById(id)
    }

    async createUser(id, username, password, email, role) {
        return UsersModels.query().insert({id, username, password, email, role})
    }

    async deleteUser(id) {
        return UsersModels.query().deleteById(id);
    }

    async updateUser(id, username, password, email, role) {
        return UsersModels.query().findById(id).update({username, password, email, role})
    }
}

module.exports = new UserRepository();