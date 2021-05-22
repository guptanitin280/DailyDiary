module.exports=function(req,res,pageModel){
	if(!req.isAuthenticated()) {
        res.redirect("/");
        return
    }
    console.log("from likes ",req.query)
    require(__dirname + "/../../functions/likeThePost.js")(req.query.pageId,req.user,pageModel).then(likes => {
        console.log(likes)
        res.json({likes: likes})
    }).catch(err => {
        res.send(err);
    })
}