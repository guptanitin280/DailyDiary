
const getDashboard = async (req, res, userModel) =>
{
	if(!req.isAuthenticated()) {
		res.redirect("/login");
		return
	}
	// const user = await userModel.findById(req.user.id).exec();
	// if(user) {
		res.render("dashboard",{user:req.user});
	// } else {
	// 	res.redirect("/login");
	// }
};

module.exports = getDashboard