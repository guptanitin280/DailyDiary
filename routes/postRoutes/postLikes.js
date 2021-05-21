module.exports=function(req,res,pageModel){
    require(__dirname + "/../../functions/likeThePost.js")(req.body.pageId,req.user._id,pageModel);
    res.redirect("/getPage/"+req.body.pageId);
}