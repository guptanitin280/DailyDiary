
const getDiaries= (req, res) => {
    if(!req.isAuthenticated()) {
        res.redirect("/");
        return
    }
    res.render("newDiary",{
        name : req.user.username
    });
};

module.exports = getDiaries;