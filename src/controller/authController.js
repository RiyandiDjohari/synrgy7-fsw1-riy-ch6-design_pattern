const { UsersModels } = require("../model/users.model");
const bcrypt = require("bcrypt");

const getLoginPage = (req, res) => {
  res.render("login");
};

const getRegisterPage = (req, res) => {
  res.render("register");
};

const loginRequest = async (req, res) => {
  const { username, password } = req.body;

  const user = await UsersModels.query().findOne({
    username,
  });

  if (user && bcrypt.compareSync(password, user.password)) {
    res.status(200).json({ message: "Login Success", success: true });
  } else {
    res.status(400).json({ message: "Username or password wrong", success: false });
  }
  console.log(user);
};

const registerUser = async (req, res) => {
  const {username, password, email, role} = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  const usersLength = (await UsersModels.query()).length;

  if (username && password && email && role) {
    const user = await UsersModels.query().insert({
      id: usersLength + 1,
      username,
      password: hashedPassword,
      email,
      role,
    });
    res.status(201).json({ message: "Register new user successfully", success: true , user});
  } else {
    res.status(400).json({ message: "Something went wrong", success: false });
  }
}

module.exports = {
  getLoginPage,
  loginRequest,
  getRegisterPage,
  registerUser
};
