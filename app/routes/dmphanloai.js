
module.exports = function (router) {
    var dmphanloaiController = require('../controllers/dmphanloai');
    router.get('/dmphanloai/list', dmphanloaiController.get_list)
};