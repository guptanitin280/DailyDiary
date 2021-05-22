const mongoose=require("mongoose");


const pageSchema=new mongoose.Schema({
	owner_id : {
		type : String,
		required : true
	},
	author_id : {
		type :String,
		required :true
	},
	author_name : String,
	diary_id:String,
	content : String,
	isPrivate : Boolean,
	likes : Number,
	likedBy : [{
		user_id: String,
		name : String
	}],
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


module.exports = mongoose.model("page",pageSchema);