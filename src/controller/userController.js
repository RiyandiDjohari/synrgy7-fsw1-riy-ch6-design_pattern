const { UsersModels } = require("../model/users.model");
const bcrypt = require("bcrypt");
const userService = require("../service/userService");

const getUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.status(200).json({ message: "Success", users });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);

  if (user) {
    res.status(200).json({ message: "Success", user });
  } else {
    res.status(404).json({ message: `User with id ${id} not found` });
  }
};

const createUser = async (req, res) => {
  const {username, password, email, role} = req.body;
  const usersLength = await userService.getUsersLength();

  const id = usersLength + 1;

  if (username && password && email && role) {
    const user = await userService.createUser(id, username, password, email, role)
    res.status(201).json({ message: "Create new user successfully", user });
  } else {
    res.status(400).json({ message: "Something went wrong" });
  }
};

const deleteUser = async (req, res) => {
  let { id } = req.params;

  const deletedUser = await userService.deleteUser(id);

  if (deletedUser) {
    res.status(200).json({ message: `Delete user with id ${id} Success` });
  } else {
    res.status(404).json({ message: `User with id ${id} not found` });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const {username, password, email, role} = req.body;

  const updatedUser = await userService.updateUser(+id, username, password, email, role);

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
