module.exports= function(req,res,userModel) {
    if (req.isAuthenticated()) {

        const user = req.user;
        let friend = {
            'friend_id': req.body.profileId,
            'name': req.body.profileName
        }
        console.log(friend);
        console.log(user);
        userModel.updateOne({'_id': user._id}, {'$push': {friends: friend}},function(err,res){
            if(err){
                console.log(err);
            }else{
                console.log(res);
            }
        });
        res.redirect("/dashboard");
    } else {
        res.redirect("/login");
    }
}