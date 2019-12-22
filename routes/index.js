const express = require('express') // Bring in express
const router = express.Router() // Destructure off the router and call it

router.get('/', (req, res) => res.send('Welcome')) // Welcome route

module.exports = router // Export the router out
