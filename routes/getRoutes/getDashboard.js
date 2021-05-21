
const getDashboard = (req, res, userModel) =>
{
	let username;
	if(req.isAuthenticated())
		username=req.user.username;
	else
		res.redirect("/login");
	console.log(username);

	userModel.find({username:username},function(err,user){
		if(err){
			console.log(err);
		} else {
			if(user.length > 0){
				res.render("dashboard",{username:username});
			} else {
				res.redirect("/");
			}
		}
	});
};

module.exports = getDashboard