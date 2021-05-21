module.exports=async function(req,diaryId,content,pageModel,diaryModel) {
    await diaryModel.findOne({'_id': diaryId}, async function (err, diary) {
        if (err || !diary) {
            console.log(err);
        } else {
            let newPage = new pageModel({
                owner_id: diary.owner_id,
                author_id: req.user.username,
                isPrivate: true,
                likes: 0,
                content: content,
                diary_id: diary._id
            });
            await newPage.save(async function (err, page) {
                if (err) {
                    console.log(err);
                } else {
                    await diaryModel.updateOne({'_id': diary._id}, {"$push": {page_ids: page._id}},
                        function (err) {
                            if (err)
                                console.log(err);
                        });
                }
            });
        }
    });


}