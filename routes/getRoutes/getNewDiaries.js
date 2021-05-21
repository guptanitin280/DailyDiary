
const getDiaries= (req, res) => {
    res.render("newDiary",{
        name : req.user.username
    });
};

module.exports = getDiaries;