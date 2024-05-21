const userRepository = require("../repository/userRepository");
const bcrypt = require("bcrypt");

class UserService {
  async getAllUsers() {
    return userRepository.findAll();
  }

  async getUserById(id) {
    return userRepository.findById(id);
  }

  async getUsersLength() {
    return userRepository.getUsersLength();
  }

  async createUser(id, username, password, email, role) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    return userRepository.createUser(id, username, hashedPassword, email, role);
  }

  async deleteUser(id) {
    return userRepository.deleteUser(id);
  }

  async updateUser(id, username, password, email, role) {
    const hashedPassword = bcrypt.hashSync(password , 10);
    return userRepository.updateUser(id, username, hashedPassword, email, role);
  }
}

module.exports = new UserService();
