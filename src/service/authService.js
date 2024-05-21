const authRepository = require("../repository/authRepository");

class AuthService {
    async login (username) {
        return authRepository.loginRequest(username);
    }
}

module.exports = new AuthService();