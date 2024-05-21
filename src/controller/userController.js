const { UsersModels } = require("../model/users.model");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  const users = await UsersModels.query();
  res.status(200).json({ message: "Success", users });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await UsersModels.query().findById(id);

  if (user) {
    res.status(200).json({ message: "success", user });
  } else {
    res.status(404).json({ message: `User with id ${id} not found` });
  }
};

const createUser = async (req, res) => {
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
    res.status(201).json({ message: "Create new user successfully", user });
  } else {
    res.status(400).json({ message: "Something went wrong" });
  }
};

const deleteUser = async (req, res) => {
  let { id } = req.params;

  const deletedUser = await UsersModels.query().deleteById(id);

  if (deletedUser) {
    res.status(200).json({ message: `Delete user with id ${id} Success` });
  } else {
    res.status(404).json({ message: `User with id ${id} not found` });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

    const updatedUser = await UsersModels.query().findById(id).update(payload);

  if (updatedUser) {
    res.status(200).json({ message: `User with id ${id} Updated` });
  } else {
    res.status(400).json({ message: `User with id ${id} not found` });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};
