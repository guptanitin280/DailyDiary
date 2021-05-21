module.exports=async function (req, res, User) {
    if (req.isAuthenticated()) {
        console.log((await require(__dirname + "/../../functions/getAllDiaryByUser.js")(req.user.username, User)).myDiaries,"fasdfa");
        res.render("compose", {
            name: req.user.username,
            diaries: (await require(__dirname + "/../../functions/getAllDiaryByUser.js")(req.user.username, User)).myDiaries,
            content: req.body.content
        });
    } else {
        res.redirect("/login");
    }
};