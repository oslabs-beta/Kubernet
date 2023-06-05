const { User } = require('../models/UserModel')
const bcrypt = require('bcrypt.js');

const userController = {};

userController.createUser = (req, res, next) => {
  const {username, password} = req.body;

  User.create()
} 

module.exports = {userController};