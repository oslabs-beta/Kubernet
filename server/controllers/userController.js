const  User  = require('../models/UserModel')
const bcrypt = require('bcryptjs');

const userController = {};

userController.createUser = (req, res, next) => {
  const {username, password} = req.body;
  User.create({username, password})
  .then(newUser => {
    console.log('i got here')
    res.locals.user = newUser.id
    return next();
  })
  .catch(err => {
    return next({
      log: `createUser: ${err}`,
      status: 400,
      message: { err: 'An error occured in the createUser controller'}
    });
  });
};


userController.verifyUser = (req, res, next) => {
  const {username, password} = req.body;

  User.findOne({username})
  .then(user => {
    if (!user) {
      res.sendStatus(404)
      console.log('user not found')
    } else {
      // use bcrypt to compare our password to our presaved password
      bcrypt.compare(password, user.password)
      .then(result => {
        if (!result) {
         res.sendStatus(401);
        } else {
          console.log('Correct credentials')
          res.locals.user = user.id
          return next();
          
        }
        
      })
      
    }
  })
  .catch(err => {
    return next ({
      log: `error ${err}`,
      status: 400,
      message: {err: `error occured in login controller`}

    })
  })
}

module.exports =  userController ;