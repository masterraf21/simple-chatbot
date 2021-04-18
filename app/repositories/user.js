const User = require('../models/user');

async function createUser(user) {
  return await new User(user).save();
}

async function getAllUsers() {
  const users = await User.find({});

  return users;
}

async function getUserById(id) {
  const user = await User.findOne({id: id});

  return user;
}

async function deleteUserById(id) {
  return await User.findOneAndDelete({id: id});
}
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUserById,
};
