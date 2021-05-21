
const getDashboard = async (req, res, userModel, pageModel) =>
{
	if(!req.isAuthenticated()) {
		res.redirect("/login");
		return
	}
	// const user = await userModel.findById(req.user.id).exec();
	// if(user) {
	const pages = await pageModel.find({isPrivate : false}).limit(5).exec();

	res.render("dashboard",{user:req.user,pages: pages });
	// } else {
	// 	res.redirect("/login");
	// }
};

module.exports = getDashboard