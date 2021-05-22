module.exports=async function(req,res,userModel) {
    if (req.isAuthenticated()) {
        const users = await userModel.find({'username': req.body.username});
        console.log(users, users.length);
        res.render("serachedUser", {users: users});
    } else {
        res.redirect("/login");
    }
}