const express = require('express');
const loginRouter = express.Router();

const userController = require('../controllers/userController')


loginRouter.post('/loginUser', userController.verifyUser, (req,res))