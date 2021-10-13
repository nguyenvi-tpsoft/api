const db = require('../common/connect');
const Dmphanloai = function (dmphanloai) {
    this.msloai = dmphanloai.msloai
    this.tenloai = dmphanloai.tenloai
}

dmphanloai.get_add = function (result) {
    db.query("SELECT * FROM dmphanloai", function (err, dmphanloai) {
        result(data)

    });
}