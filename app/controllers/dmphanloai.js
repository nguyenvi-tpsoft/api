var Dmphanloai = require('../models/dmphanloai');


exports.get_list = function (req, res) {
    Dmphanloai.get_all(function (data) {
        res.send({ result: data })
    })
}
