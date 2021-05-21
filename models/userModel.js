const mongoose=require("mongoose");
const passportLocalMongoose=require("passport-local-mongoose");


const userSchema=new mongoose.Schema({
	username : {
		type : String,
		required : true,
		unique : true
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

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",userSchema);

