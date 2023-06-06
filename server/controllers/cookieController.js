const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  console.log('In SSID Controller')
  res.cookie('ssid', res.locals.user, {httpOnly: true });
  console.log(req.cookies.ssid)
  console.log(res.locals.user)
  return next();
}




module.exports = cookieController