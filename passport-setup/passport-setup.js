const session=require('express-session');
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose");
const userModel = require(  __dirname + "/../models/userModel.js");


passport.use(userModel.createStrategy());

passport.serializeUser((user, done) => {
	done(null , user.id)
});

passport.deserializeUser((id, done) => {
	userModel.findById(id).then(user => {
		done(null, user)
	})
});

