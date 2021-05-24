const express=require("express");
const bodyParser=require("body-parser");
const fileupload = require("express-fileupload");
const ejs=require("ejs");
const mongoose=require("mongoose");
const session=require('express-session');
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose");
const {routesHandler } = require( __dirname + "/routes/AllRoutesHandlers.js");
const {diaryModel, userModel, pageModel , imageModel} = require(  __dirname + "/models/Allmodels.js")
const { LoremIpsum } = require("lorem-ipsum");
const fs = require('fs')

const images = []

const push_images = () => {
	for(let i=1;i<=6;i++) {
		fs.readFile("public/images/pic" + i.toString() + ".jpeg" , async (err, data) => {
			const img = new imageModel({
			  	contentType : 'image/jpeg',
			  	data : data
			  })
			const im1 = await img.save();
			images.push(im1._id);
			console.log(im1.id);
		})
	}
}

// const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 8,
		min: 4
	},
	wordsPerSentence: {
		max: 16,
		min: 4
	}
});

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


async function generateDb() {
	
	let users = ['Ritik Mittal', 'Nitin Gupta', 'Rishab Nahar' , 'Sobhagya', 'Dipesh', 'Marmik'];
	let user_ids = []
	let open_dairy_id = []
	for(let i = 0; i< users.length; i++) {
		let notfi = [];
		for(let j=0;j<5;j++) {
			notfi.push({
				notification: "it's new notificaton " + j.toString() + users[i],
				arrivalTime : Date.now()
			})
		}
		let newUser = new userModel({
			username : users[i],
			img_id : images[i],
			favicon_id : images[i],
			bio : "hey it's me " + users[i],
			notifications : notfi
		})
		await userModel.register(newUser, "1234")
		user_ids.push(newUser.id)
		await newUser.save();
		let newDairy = new diaryModel({
			owner_id: newUser.id,
			name : users[i] + "\'s personal ",
			isPrivate : true
		})
		await newDairy.save();
		let newDairy2 = new diaryModel({
			owner_id: newUser.id,
			name : users[i] + "'s open ",
			isPrivate : false
		})
		await newDairy2.save();
		let did = [];
		did.push({diary_id : newDairy.id, diary_name : newDairy.name})
		did.push({diary_id : newDairy2.id,  diary_name : newDairy2.name})
		await userModel.updateOne({username : newUser.username}, {
			myDiaries : did
		})
		open_dairy_id.push(newDairy2.id);
		let page_1 = [];
		let page_2 = [];
		for(let j=0;j<10;j++) {
			let page = new pageModel({
				owner_id : newUser.id,
				author_id : newUser.id,
				content : lorem.generateParagraphs(7),
				favicon_id : newUser.favicon_id,
				author_name : newUser.username,
				isPrivate : true,
				likes : i + 19,
				comments : null,
				diary_id : newDairy.id
			})
			await page.save();
			page_1.push({page_id : page.id, created_on : Date.now()});
		}
		for(let j=0;j<10;j++) {
			let page = new pageModel({
				owner_id : newUser.id,
				author_id : newUser.id,
				content : lorem.generateParagraphs(7),
				favicon_id : newUser.favicon_id,
				author_name : newUser.username,
				isPrivate : false,
				likes : i + 19,
				comments : null,
				diary_id : newDairy2.id
			})
			await page.save();
			page_2.push({page_id : page.id, created_on : Date.now()});
		}
		await diaryModel.updateOne({name : newDairy.name}, {
			page_ids : page_1
		})
		await diaryModel.updateOne({name : newDairy2.name}, {
			page_ids : page_2
		})
	}
	for(let i=0;i<user_ids.length; i++) {
		let frind = [];
		for (var j = 0; j < user_ids.length; j++) {
			if(user_ids[j] != user_ids[i]){
				frind.push ({
					friend_id : user_ids[j],
					favicon_id : images[j],
					name : users[j]
				})
			}
		}
		await userModel.updateOne({username : users[i]}, {
			friends : frind
		})
	}
	console.log("db created ... ");
}

// remove()
push_images();

setTimeout(generateDb , 1000)

