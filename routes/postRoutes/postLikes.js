module.exports=function(req,res,pageModel){
    console.log("from likes ",req.query)
    let likes = require(__dirname + "/../../functions/likeThePost.js")(req.query.pageId,req.user,pageModel);
    // res.redirect("/getPage/"+req.body.pageId);
    res.json({likes: likes})
}