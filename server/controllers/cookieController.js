const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  // console.log('In SSID Controller')
  res.cookie('ssid', res.locals.user, {httpOnly: true });
  return next();
}




module.exports = cookieController