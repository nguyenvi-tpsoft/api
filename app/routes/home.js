
module.exports = function (router) {
    var homeController = require('../controllers/home');
    router.get('/', homeController.home)
};