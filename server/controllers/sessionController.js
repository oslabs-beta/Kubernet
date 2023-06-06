const Session = require('../models/sessionModel')
const sessionController = {}

sessionController.startSession = async (req, res, next) => {
  try { 
    // console.log('In SessionController.startSession')
    await Session.findOneAndUpdate(
      { cookieId: res.locals.user},
      { createdAt: Date.now()},
      { upsert: true, setDefaultsOnInsert: true } // upsert: true checks creates a new document if document is not found. seDefault makes sure default values in schema are applied
    );
    return next()
  }
  catch(err) {
    return next({
      log: 'error in startSession controller',
      status: 500,
      message: 'Error in creating/finding cookie'
    })
  }
}

module.exports = sessionController;