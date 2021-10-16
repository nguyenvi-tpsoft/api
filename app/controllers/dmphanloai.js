const Dmphanloai = require('../models/dmphanloai');


exports.list = function (req, res) {
    Dmphanloai.get_all(function (data) {
        res.send({ result: data })
    })
}
exports.detail = function (req, res) {
    Dmphanloai.get_detail(req.params.id, function (response) {
        res.send({ result: response })
    });
}
exports.add = function (req, res) {
    var data = req.body;
    Dmphanloai.create(data, function (response) {
        res.send({ result: response })
    });
}


