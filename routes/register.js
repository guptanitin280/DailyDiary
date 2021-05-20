module.exports=function(req,res,User,passport) {
    console.log(req.body);
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    User.register(user, req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, function () {
                res.redirect("/");
            });
        }
    });
}