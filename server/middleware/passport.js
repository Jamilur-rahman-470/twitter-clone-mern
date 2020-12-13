const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const User = require("../models/User");

module.exports = {
  applyPassportStrategy: (passport) => {
    const options = {};
    options.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
    options.secretOrKey = process.env.SECRET;
    passport.use(
      new JWTStrategy(options, (payload, done) => {
        User.findOne({ username: payload.username }, (err, user) => {
          if (err) return done(err, false);
          if (user) {
            return done(null, {
              username: user.username,
            });
          }
          return done(null, false);
        });
      })
    );
  },
};
