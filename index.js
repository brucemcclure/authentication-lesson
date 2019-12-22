require('dotenv').config() // Require in the .env environment variables
require('./database/connect') // Import in the db connection
const app = require('./app') // Import in the express app itself

global.HTTPError = class HTTPError extends Error {
  constructor (statusCode, message) {
    super(message)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HTTPError)
    }
    this.name = 'HTTPError'
    this.statusCode = statusCode
  }
}

// Turning on the express app. Listening onto the envirnment variable PORT
app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
)
