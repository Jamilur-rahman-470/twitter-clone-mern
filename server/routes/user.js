const router = require("express").Router();
const { loginUser, registerUser } = require("../controllers/user-controller");

router.post("/login", loginUser);
router.post(
  "/register",
  require("../middleware/image-upload-single").single("profile_image"),
  registerUser
);
// router.put('/')
// router.put('/update-wall')

module.exports = router;
