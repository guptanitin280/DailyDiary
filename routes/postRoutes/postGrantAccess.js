// postGrantAccess.js
module.exports = async (req,res, userModel,diaryModel ) => {
    if(!req.isAuthenticated()) {
        res.redirect("/");
        return
    }
    console.log(req.body)
    const friend_id = req.body.friend_id;
    const diaryId  = req.body.diary_id;
    const diaryname  = req.body.diary_name;
    const friendname  = req.body.friend_name
    const isWrite = req.body.is_write;
    const end_t = new Date(req.body.end_time);
    const st_t =  Date.now();
    console.log("en" , end_t, "st " , st_t);
    const friend = await userModel.findByIdAndUpdate(friend_id , {
        '$push' : {
            access : {
                diary_id :diaryId,
                diary_name : diaryname,
                startTime : st_t,
                endTime : end_t,
                isWrite : isWrite
            }
        }
    })
    const diary = await diaryModel.findByIdAndUpdate(diaryId , {
        '$push' : {
            access : {
                user_id :friend_id,
                user_name : friendname,
                startTime : st_t,
                endTime : end_t,
                isWrite : isWrite
            }
        }
    })
    console.log("diary " ,diary)
    console.log("friend ", friend)
    res.send("access given");
    // res.send("grnting access ")
}