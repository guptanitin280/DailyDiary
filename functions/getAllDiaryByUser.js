module.exports=async function(username,User) {
    console.log("from get",username);
    return await User.findOne({'username': username}, 'myDiaries', function (err, user) {
        if (err) return console.log(err);
        console.log("did it run",user);
       return user;
    });
}
