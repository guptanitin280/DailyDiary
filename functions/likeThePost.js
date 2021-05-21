module.exports=function(pageId,userId,pageModel) {
    pageModel.findOne({'_id': pageId}, function (err, page) {
        if (!page.likedBy.includes(userId)) {
            pageModel.findOneAndUpdate({_id: pageId}, {
                $inc: {views: 1},
                "$push": {likedBy: userId}
            }, function (err, response) {
                if (err) {
                    console.log(err);
                }
            });
        }
    });
}