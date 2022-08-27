var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController.js')

router.get('/', indexController.index)
router.get('/producto/:id', indexController.detail)

module.exports = router;
