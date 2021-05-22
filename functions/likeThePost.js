module.exports= async function(pageId,user,pageModel) {
    let likes = 0;
    const page = await pageModel.findById(pageId).exec();
    if(page === undefined) {
        console.log("page not find ",pageId)
        return likes;
    }
    const userId = {user_id: user.id, name: user.username}
    likes = page.likes;
    if (!page.likedBy.includes(userId)) {
        await pageModel.updateOne({_id: pageId}, {
            $inc: {views: 1},
            "$push": {likedBy: userId}
        })
        likes = likes + 1;
    }
    return likes;
};