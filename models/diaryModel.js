const mongoose=require("mongoose");

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

module.exports = mongoose.model("dairy",diarySchema);