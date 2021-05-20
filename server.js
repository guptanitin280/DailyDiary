const express=require("express");
const bodyParser=require("body-parser");
const fileupload = require("express-fileupload");
const ejs=require("ejs");
const mongoose=require("mongoose");
const session=require('express-session');
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose");
const {routesHandler } = require( __dirname + "/routes/AllRoutesHandlers.js");


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


const userSchema=new mongoose.Schema({
	username : {
		type : String,
		required : true,
		unique : true
	},
	password : {
		type : String,
		required : true
	},
	img : {
		data : Buffer,
		contentType : String
	},
	favicon : {
		data : Buffer,
		contentType : String
	},
	bio : String,
	friends : [{
		_id : String,
		name : String,
		favicon : {
			data : Buffer,
			contentType : String
		},
		messages : [{
			message: String,
			timeOfArrival : Date,
			isMe : Boolean,
		}]
	}],
	following : [{
		diary_id: String
	}],
	myDiaries : [{
		diary_id: String
	}],
	access: [{
		user_id : String,
		startTime: Date,
		endTime: Date,
		isWrite: Boolean
	}],
	notifications: [{
		notification: String,
		arrivalTime: Date
	}],
});
const diarySchema=new mongoose.Schema({
	_id : {
		type : String,
		required : true
	},
	owner_id : {
		type : String,
		required : true
	},
	page_ids:[{
		page_id: String
	}],

	followers : [{
		user_id : String,
		favicon : {
			data : Buffer,
			contentType : String
		}
	}],
	numberOfFollowers: Number,
	access: [{
		user_id : String,
		startTime: Date,
		endTime: Date,
		isWrite: Boolean
	}],
	isPrivate : Boolean
});
const pageSchema=new mongoose.Schema({
	_id : {
		type : String,
		required : true
	},
	owner_id : {
		type : String,
		required : true
	},
	diary_id:String,
	content : String,
	isPrivate : Boolean,
	likes : Number,
	comments : [{
		comment : String,
		user_id : String,
		time : Date,
		favicon : {
			data : Buffer,
			contentType : String
		},
	}]
},{
	timestamps : true
});

userSchema.plugin(passportLocalMongoose);
const User=new mongoose.model("User",userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());





app.get("/", (req, res) => routesHandler.getDashboard(req,res));
app.get("/login",function(req,res) { res.render("login"); });
app.get("/register",function(req,res) { res.render("register");});
app.post("/login",(req,res)=>routesHandler.login(req,res,User,passport));
app.post("/register",(req,res)=>routesHandler.register(req,res,User,passport));
app.get("/logout",(req,res)=>routesHandler.logout(req,res));
app.listen(3000 , () => {
	console.log("listening to port 3000")
})