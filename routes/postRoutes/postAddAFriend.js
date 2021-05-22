module.exports= function(req,res,userModel) {
    if (req.isAuthenticated()) {
        const profile = req.body.profile;
        const user = req.user;
        console.log(profile);
        console.log("--------------------");
        console.log(user);
        userModel.updateOne({'_id': user._id}, {
            $push: {
                'friends.friend_id': profile._id,
                'friends.name': profile.username
            }
        },function(err,response){
            if(err){
                console.log(err);
            }else{
                console.log(response);
            }
        });
        res.redirect("/dashboard");
    } else {
        res.redirect("/login");
    }
}