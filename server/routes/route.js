const express = require('express');
const loginRouter = express.Router();

const userController = require('../controllers/userController')


loginRouter.post('/signUp', userController.createUUser, (req,res) => {
  return res.sendStatus(200);
})
loginRouter.post('/loginUser', userController.verifyUser, (req,res) => {
  return res.sendStatus(200);
})