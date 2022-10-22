const multer = require('multer');
const path = require('path');
const {STATIC_PATH} = require('../contants');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(STATIC_PATH, 'images'));
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname+'-'+Date.now());
    },
});

function fileFilter(req, file, cb) {
    const REG_IMG = /^image\/(jpeg|png)$/;
    cb(null, REG_IMG.test(file.mimetype));
}

module.exports.uploadHeroPhoto = multer({storage,fileFilter}).single('heroPhoto');
