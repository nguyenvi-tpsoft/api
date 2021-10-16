module.exports = function (router) {
    var homeController = require('../controllers/home');
    router.get('/about', homeController.about)
    router.get('/', homeController.home)
};