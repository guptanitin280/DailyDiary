
module.exports= (req, res) => {
    if(!req.isAuthenticated()) {
        res.redirect("/");
        return
    }
    res.render("explore");
};

