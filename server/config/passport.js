const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Data = mongoose.model("data");
const keys = require("./keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Data.findById(jwt_payload.id)
        .then(data => {
          if (data) {
            return done(null, data);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
