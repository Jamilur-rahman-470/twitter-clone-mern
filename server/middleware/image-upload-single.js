const path = require("path");
const multer = require("multer");
const { imageFilter } = require("./image-filter");

module.exports = multer({
  dest: path.join(__dirname, "upload", "images"),
  fileFilter: imageFilter,
});
