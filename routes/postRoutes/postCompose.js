module.exports=async function(req,res,pageModel,diaryModel) {
    console.log(req.body);
    if(req.body.diaryId === undefined) {
        res.send("create a dairy first ")
    } else {
        await require(__dirname + "/../../functions/InsertNewPage.js")(req, req.body.diaryId, req.body.content, pageModel, diaryModel);
        res.redirect("/dashboard");
    }
}