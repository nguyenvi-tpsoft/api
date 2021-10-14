var express = require('express');
var router = express.Router();

var dmphanloaiController = require('../controllers/dmphanloai');

router.get('dmphanloai/list', dmphanloaiController.get_list)

module.exports = router;