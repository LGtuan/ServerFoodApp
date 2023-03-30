var express = require('express')
var router = express.Router()
var billController = require('../controllers/billControllder')

router.get('/', billController.bill)

module.exports = router