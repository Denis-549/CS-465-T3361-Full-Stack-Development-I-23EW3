var express = require('express');
var router = express.Router();
var ctrMain = require('../controllers/main');


/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
