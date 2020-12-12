const User = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports = {
  loginUser: async (req, res) => {
    try {
      const user = await User.find({ username: req.body.usename });
      const pass = await bcrypt.compare(req.body.password1, user.password);
      if (pass) {
        return res.status(200).json({
          msg: "got user",
          ...user,
          password: null,
        });
      } else {
        return res.status(400).json({
          msg: "password or username did not match",
        });
      }
    } catch (error) {
      return res.staus(400).json({
        msg: "failed to get user",
      });
    }
  },


  registerUser: async (req, res) => {
    try {
      const user = await User.find({ username: req.body.username });
      if (!user) {
        if (req.body.password1 === req.body.password2) {
          const hass_pass = await bcrypt.hash(req.body.password1);
          const newuser = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: hass_pass,
            username: req.body.usename,
            profile_photo: req.file.path ? req.file.path : "",
          });
  
          await newuser.save();
          res.status(200).json({
              msg: 'user registered',
            ...newuser,
          });
        } else {
          return res.staus(400).json({
            msg: "Password did not match",
          });
        }
      } else {
        return res.staus(400).json({
          msg: "user with the username already exists",
        });
      }
    } catch (error) {
      return res.staus(400).json({
        msg: "failed to register user",
      });
    }
  }
}

