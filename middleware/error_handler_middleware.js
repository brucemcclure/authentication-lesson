/*
Error handling middleware.
Takes 4 functions
Logs the http error if there is one
Exports it in the declaration
*/

module.exports = function (err, req, res, next) {
  if (err && err.name === 'HTTPError') {
    return res.status(err.statusCode).send(err.message)
  }

  return next(err)
}
