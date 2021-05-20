const express=require("express");
const fileupload = require("express-fileupload");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const mongoose=require("mongoose");
const session=require('express-session');
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose");
const routesHandler = require( __dirname + "/routes/AllRoutesHandlers.js");


// mongoose.connect("mongodb://localhost:27017/forms", {
// 							useNewUrlParser: true,  
// 							useUnifiedTopology: true
// 						}).then( () => console.log("connected to DB."))
// 							.catch( err => console.log(err));;


const app = express();


app.use(fileupload());
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
	routesHandler(req, res)
	// res.send("hello")
});
console.log(routesHandler)

app.listen(3000 , () => {
	console.log("listening to port 3000")
})