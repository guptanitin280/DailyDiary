module.exports=async function(req,res,pageModel,diaryModel) {
    await require(__dirname + "/../../functions/InsertNewPage.js")(req,req.body.diaryId._id,req.body.content,pageModel,diaryModel);
    res.redirect("/dashboard");
}