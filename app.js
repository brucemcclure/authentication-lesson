const express = require('express')
const exphbs = require('express-handlebars')
const morgan = require('morgan') // An Http request logger
const expressSession = require('express-session') // Brings sessions into express
const app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main' })) // Setup for handlebars
app.set('view engine', 'handlebars') // Setup for handlebars

// Brings sessions into express
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    coockie: {
      expires: 60000
    }
  })
)

app.use(express.urlencoded({ extended: false })) // Makes the data stream useable
app.use(express.json()) // Makes the data stream useable

app.use(morgan('combined')) // Using morgan

app.use(require('./routes')) // Assigning the routes

app.use(express.static('public')) //

app.use(require('./middleware/error_handler_middleware')) // Requiring in the Error handling middleware

module.exports = app // Export the app
