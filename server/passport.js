const passport = require('passport');


var GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = "850990531748-o5dl9ts45sninmgios4kr23n7ah9qlpf.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile)
  }
));

passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})