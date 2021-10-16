const db = require('../common/connect');
const Dmphanloai = function (dmphanloai) {
    this.msloai = dmphanloai.msloai;
    this.tenloai = dmphanloai.tenloai
}

Dmphanloai.get_all = function (result) {
    db.query("SELECT * FROM dmphanloai", function (err, dmphanloai) {
        if (err) {
            result(null)
        } else {
            result(dmphanloai);
        }
    })
}
Dmphanloai.get_detail = function (msloai, result) {
    db.query("SELECT * FROM dmphanloai where msloai='" + msloai + "'", function (err, dmphanloai) {
        if (err) {
            result(null)
        } else {
            result(dmphanloai);
        }
    })
}
module.exports = Dmphanloai;