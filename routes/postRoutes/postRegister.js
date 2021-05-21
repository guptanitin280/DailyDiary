
module.exports=function(req,res,userModel,passport) {
    userModel.find({username: req.body.username}).then(user => {
        if(user.length == 0) {
            const newUser = new userModel({
                username: req.body.username,
            });
            userModel.register(newUser, req.body.password, function (err, user) {
                if (err) {
                    console.log(err);
                    res.redirect("/");
                } else {
                    passport.authenticate("local")(req, res, function () {
                        res.redirect("/dashboard");
                    });
                }
            });
        } else {
            console.log(user);
            res.send("alredy registered");
        }
    })


}