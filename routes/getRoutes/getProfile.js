module.exports=async function(req,res,userModel) {
    if (req.isAuthenticated()) {
        const profileId = req.params.user_id;
        const profileUser = await userModel.findById(profileId).exec();
        res.render("profile", {user: profileUser});
    } else {
        res.render("home");
    }
}