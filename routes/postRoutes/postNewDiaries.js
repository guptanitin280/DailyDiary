module.exports=async function(req,res,userModel,diaryModel,pageModel){
	if(!req.isAuthenticated()) {
        res.redirect("/");
        return
    }
    await require(__dirname +"/../../functions/makeNewDiaryByUser.js")(req.user,req.body.diaryName,req.body.content,userModel,pageModel,diaryModel);
    res.redirect("/dashboard");
};