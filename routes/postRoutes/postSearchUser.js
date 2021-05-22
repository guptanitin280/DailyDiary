module.exports=async function(req,res,userModel) {
	if(!req.isAuthenticated()) {
        res.redirect("/");
        return
    }
    if (req.isAuthenticated()) {
        const users = await userModel.find({'username': {'$regex' : req.body.username}});
        console.log(users, users.length);
        res.render("serachedUser", {users: users});
    } else {
        res.redirect("/login");
    }
}