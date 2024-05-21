const { UsersModels } = require("../model/users.model");
const bcrypt = require("bcrypt");
const userService = require("../service/userService");
const authService = require("../service/authService");

const getLoginPage = (req, res) => {
  res.render("login");
};

const getRegisterPage = (req, res) => {
  res.render("register");
};

const loginRequest = async (req, res) => {
  const { username, password } = req.body;

  const user = await authService.login(username);

  if (user && bcrypt.compareSync(password, user.password)) {
    res.status(200).json({ message: "Login Success", success: true });
  } else {
    res.status(400).json({ message: "Username or password wrong", success: false });
  }
  console.log(user);
};

const registerUser = async (req, res) => {
  const {username, password, email, role} = req.body;
  const usersLength = await userService.getUsersLength();
  const id = usersLength + 1;

  try {
    const user = await userService.createUser(id, username, password, email, role)
    res.status(201).json({ message: "Create new user successfully", user, success: true });
  } catch(err) {
    res.status(400).json({ message: "Something went wrong", success: false});
  }
}

module.exports = {
  getLoginPage,
  loginRequest,
  getRegisterPage,
  registerUser
};
