
module.exports = function (router) {
    var dmphanloaiController = require('../controllers/dmphanloai');
    router.get('/dmphanloai/list', dmphanloaiController.list);
    router.get('/dmphanloai/detail/:id', dmphanloaiController.detail);
    router.post('/dmphanloai/add', dmphanloaiController.add);
};