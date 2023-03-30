var express = require('express')
var router = express.Router()
var dashboardController = require('../controllers/dashboardController')

router.get('/', dashboardController.dashboard)

module.exports = router