module.exports=async function(req,res,pageModel,diaryModel){
    if(req.isAuthenticated()){
        const pageId=req.params.pageId;
        const page=await pageModel.findById(pageId).exec();
        const diary = await diaryModel.findById(page.diary_id).exec();
        let isAccess = false;
        if (req.user._id == page.author_id) {
            isAccess = true;
        }
        for (let i = 0; i < diary.access.length; i++) {
            if (diary.access[i].user_id == req.user._id && diary.access[i].isWrite == true && diary.access[i].endTime>=Date.now()) {
                isAccess = true;
            }
        }
        if(!isAccess){
            res.render("404");
        }else{
            res.render("editPage",{
                authorId : page.owner_id,
                ownerId : page.author_id,
                diaryId : page.diary_id,
                pageId : page._id,
                content : page.content
            });
        }
    }else{
        res.redirect("/login");
    }
}