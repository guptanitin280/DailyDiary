
const getDashboard = (req, res, User) =>
{
	let username;
	if(req.isAuthenticated())
		username=req.user.username;
	else
		res.redirect("/login");
	console.log(username);
	User.find({username:username},function(err,user)
	{
		if(err)
		{
			console.log(err);
		}
		else
		{
			if(user)
			{
				res.render("dashboard",{username:username});
			}
			else
			{
				res.redirect("/login");
			}
		}
	});
};

module.exports = getDashboard