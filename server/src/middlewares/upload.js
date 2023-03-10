const multer = require('multer');
const uuid = require("uuid");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const i = file.originalname.lastIndexOf(".");
      const ext = i ? file.originalname.substr(i + 1) : "jpeg";
        console.log({bdoy: req.body})
      cb(null, `${file.fieldname}-${uuid.v4()}.${ext}`)
    }
  })
   
  var upload = multer({ storage: storage })

  module.exports = upload;