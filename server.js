const express=require("express");
const bodyParser=require("body-parser");
const fileupload = require("express-fileupload");
const ejs=require("ejs");
const mongoose=require("mongoose");
const session=require('express-session');
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose");
const {routesHandler } = require( __dirname + "/routes/AllRoutesHandlers.js");
const {diaryModel, userModel, pageModel } = require(  __dirname + "/models/Allmodels.js")

const app = express();


app.use(express.static("public"));
app.set('view engine','ejs');
app.use(fileupload());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(session({
	secret: "Oh! that's secret",
	resave: false,
	saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());


mongoose.connect("mongodb://localhost:27017/userDataBase", {
							useNewUrlParser: true,
							useUnifiedTopology: true
						}).then( () => console.log("connected to DB."))
							.catch( err => console.log(err));

mongoose.set("useCreateIndex",true);

// const User = new userModel;
passport.use(userModel.createStrategy());

passport.serializeUser((user, done) => {
	done(null , user.id)
});

passport.deserializeUser((id, done) => {
	userModel.findById(id).then(user => {
		done(null, user)
	})
});


app.get("/", (req,res) => routesHandler.getHome(req,res) );
app.get("/dashboard", (req, res) => routesHandler.getDashboard(req,res,userModel));
app.get("/login", (req,res) => routesHandler.getLogin(req,res) );
app.get("/register",(req,res) => routesHandler.getRegister(req,res) );
app.post("/login",(req,res)=>routesHandler.postLogin(req,res,userModel,passport));
app.get("/compose",(req,res)=>routesHandler.compose(req,res,userModel));
app.post("/register",(req,res)=>routesHandler.postRegister(req,res,userModel,passport));
app.post("/logout",(req,res)=>routesHandler.postLogout(req,res));
app.listen(8000 , () => {
	console.log("listening to port 8000")
})