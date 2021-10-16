const db = require('../common/connect');
const Dmphanloai = function (dmphanloai) {
    this.rowid = dmphanloai.rowid;
    this.msdv = dmphanloai.msdv;
    this.msloai = dmphanloai.msloai;
    this.tenloai = dmphanloai.tenloai;
    this.phanloai = dmphanloai.phanloai;
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
Dmphanloai.get_detail = function (rowid, result) {
    db.query("SELECT * FROM dmphanloai where rowid='" + rowid + "'", function (err, dmphanloai) {
        if (err) {
            result(null)
        } else {
            result(dmphanloai);
        }
    })
}
Dmphanloai.create = function (data, result) {
    db.query("INSERT INTO dmphanloai SET ?", data, function (err, dmphanloai) {
        if (err) {
            result(null)
        } else {
            result({ ...data });
        }
    })
}
module.exports = Dmphanloai;