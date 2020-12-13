const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  loginUser: async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (user) {
      const userPass = await bcrypt.compare(password, user.password);
      if (userPass) {
        const token = jwt.sign({ username }, process.env.SECRET, {
          expiresIn: 10000,
        });
        delete user._doc.password;

        res.status(200).json({
          user: user._doc,
          token,
        });
      } else {
        res.status(400).json({
          err: "Password did not match",
        });
      }
    } else {
      res.status(400).json({
        err: "No user found",
      });
    }
  },
  registerUser: async (req, res) => {
    const { first_name, last_name, username, password } = req.body;
    const user = await User.findOne({ username: username });
    const hash = bcrypt.hashSync(password, 12);
    if (!user) {
      const newUser = new User({
        first_name,
        last_name,
        username,
        password: hash
      });
      await newUser.save();
      const token = jwt.sign({ username }, process.env.SECRET, {
        expiresIn: 10000,
      });
      delete newUser._doc.password;
      res.status(200).json({
        user: newUser._doc,
        token,
      });
    } else {
      res.status(200).json({
        err: "User already exist",
      });
    }
  },
};
