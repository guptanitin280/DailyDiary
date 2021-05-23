module.exports=async function(req,res,userModel) {
    if (req.isAuthenticated()) {
        const profileId = req.params.user_id;
        let isSelf = false;
        let profileUser = {};
        if( req.params.user_id === undefined || req.params.user_id === 's') {
            isSelf = true;
        } else {
            profileUser = await userModel.findById(profileId).exec();
        }
        res.render("profile", {user: profileUser, isSelf : isSelf});
    } else {
        res.render("home");
    }
}