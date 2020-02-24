const path = require('path');
const multer = require('multer');

// Set The Storage Engine - can access req.body before upload here
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    let currentUploadHashtags = req.body.hashtags;
    let currentCategory = req.body.category;

    if (currentUploadHashtags && currentCategory) {
      currentUploadHashtags = JSON.parse(currentUploadHashtags);
      currentCategory = JSON.parse(currentCategory);
    }

    // Check if hashtags are available
    if (
      !currentUploadHashtags ||
      currentUploadHashtags.length === 0 ||
      !currentCategory
    ) {
      cb(new Error('Hashtags and Category are required !'));
    } else {
      cb(null, './uploads/');
    }
  },
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  }
});

// Check File Type
const checkFileType = (file, cb) => {
  // Allowed extensions
  const filetypes = /jpeg|jpg|png|gif/;
  // Check extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mimetype
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
};

// Init Multer Upload, change size limit as desired
const upload = multer({
  storage: storage,
  limits: { fileSize: 5000000000 },
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).array('images');

module.exports = upload;
