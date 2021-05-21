module.exports=async function(req,res,pageModel,diaryModel) {
    console.log(req.body);
    await require(__dirname + "/../../functions/InsertNewPage.js")(req,req.body.diaryId,req.body.content,pageModel,diaryModel);
    res.redirect("/dashboard");
}