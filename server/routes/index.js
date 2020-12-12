const router = require("express").Router();
const user_route = require("./user");
router.use("/user",user_route);
module.exports = router;
