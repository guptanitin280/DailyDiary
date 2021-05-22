// postGrantAccess.js
module.exports = (req,res) => {

    res.render("grantAccess" , {friend : friend, user: req.user})
    // res.send("grnting access ")
}