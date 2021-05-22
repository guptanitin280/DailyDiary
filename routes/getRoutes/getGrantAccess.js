module.exports = (req,res) => {
    // res.render()
    console.log(req.query)
    const friend = {
        id: req.query.friend_id,
        name : req.query.friend_name
    }
    res.render("grantAccess" , {friend : friend, user: req.user})
    // res.send("grnting access ")
}
// getGrantAccess