const {Model} = require("objection")

class UsersModels extends Model {
  id;
  username;
  email;
  password;
  role;

  static get tableName() {
    return "users";
  }
}

module.exports = {
    UsersModels
} 
