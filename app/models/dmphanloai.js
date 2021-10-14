const db = require('../common/connect');
const Dmphanloai = function (dmphanloai) {
    this.id = dmphanloai.id;
    this.name = dmphanloai.name
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
module.exports = Dmphanloai;