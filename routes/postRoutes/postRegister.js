const imageModel = require(__dirname + "/../../models/imageModel.js")
module.exports=function(req,res,userModel,passport) {
    if(!req.files) {
        res.send("please upload a pic")
    } else {
        userModel.find({username: req.body.username}).then(user => {
            if(user.length == 0) {
                const img_model = new imageModel({
                    data : req.files.photo.data,
                    contentType : req.files.photo.mimetype
                })
                img_model.save();
                const newUser = new userModel({
                    username: req.body.username,
                    img_id : img_model.id,
                    favicon_id : img_model.id
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
}