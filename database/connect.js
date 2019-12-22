const mongoose = require('mongoose') // Require in mongoose

mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}) // Connect to the DB
mongoose.Promise = global.Promise // Use the global promise library
mongoose.connection.on('error', console.log) // Log the error if there is one
