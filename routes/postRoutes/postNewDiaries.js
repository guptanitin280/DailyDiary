module.exports=async function(req,res,userModel,diaryModel,pageModel){
    console.log(req.body);
    console.log(req.user);
    await require(__dirname +"/../../functions/makeNewDiaryByUser.js")(req.user,req.body.diaryName,req.body.content,userModel,pageModel,diaryModel);
    res.redirect("/");
};