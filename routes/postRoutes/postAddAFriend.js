module.exports= function(req,res,userModel) {
    if (req.isAuthenticated()) {
        const profile = req.body.profile;
        const user = req.user;
        console.log(profile);
        console.log("--------------------");
        console.log(user);
        let friend = {
            'friend_id': profile._id,
            'name': profile.username
        }
        user.friends.push(friend);
        user.save(function(err){
            if(err){
                console.log(err);
            }
        });
        res.redirect("/dashboard");
    } else {
        res.redirect("/login");
    }
}