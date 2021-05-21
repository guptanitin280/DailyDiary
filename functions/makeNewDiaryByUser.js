module.exports=async function(user,diaryName,content,userModel,PageModel,DiaryModel) {
    let diary1 = new DiaryModel({
        owner_id: user._id,
        name: diaryName,
        isPrivate: true
    });
    return await diary1.save(async function (err, diary) {
        if (err) {
            console.log(err);
        } else {
            let pg1 = new PageModel({
                owner_id: user._id,
                author_id: user._id,
                isPrivate: true,
                likes: 0,
                content: content,
                diary_id: diary._id
            });
            pg1.save(async function (err, page) {
                if (err) {
                    console.log(err);
                } else {
                    await DiaryModel.updateOne({'_id': diary._id}, {"$push": {page_ids: page._id}},
                        function (err) {
                            if (err)
                                console.log(err);
                        });
                    await userModel.updateOne({'_id': user._id}, {"$push": {myDiaries: diary._id}},
                        function (err) {
                            if (err)
                                console.log(err);
                        });
                }
            });
            return diary._id;
        }
    });
}
