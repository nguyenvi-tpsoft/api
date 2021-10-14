const db = require('../common/connect');
const Dmphanloai = function (dmphanloai) {
    this.msloai = dmphanloai.msloai
    this.tenloai = dmphanloai.tenloai
}

Dmphanloai.get_all = function (result) {
    db.query("SELECT * FROM dmphanloai", function (err, dmphanloai) {
        if (err) {
            result(err);
        } else {
            result(data);
        }
    });
}