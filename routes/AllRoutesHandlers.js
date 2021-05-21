const getDashboard = require( __dirname + "/getRoutes/getDashboard.js");
const postLogin = require(__dirname+"/postRoutes/postLogin.js");
const postRegister = require(__dirname+"/postRoutes/postRegister.js");
const postLogout = require(__dirname+"/postRoutes/postLogout.js");
const getLogin = require(__dirname+"/getRoutes/getLogin.js");
const getHome = require(__dirname+"/getRoutes/getHome.js");
const getRegister = require(__dirname+"/getRoutes/getRegister.js");
const getcompose = require(__dirname+"/getRoutes/getcompose.js");
const getDiary = require(__dirname + "/getRoutes/getDairy.js");
const getViewPage = require(__dirname + "/getRoutes/getViewPage.js")
const getNewDiaries = require(__dirname+"/getRoutes/getNewDiaries.js");
const postNewDiaries = require(__dirname+"/postRoutes/postNewDiaries.js");
const postCompose = require(__dirname+"/postRoutes/postCompose.js");

const handler = {
    getDashboard : getDashboard,
    getLogin : getLogin,
    postLogin : postLogin,
    getRegister : getRegister,
    postRegister : postRegister,
    postLogout : postLogout,
    getHome : getHome,
    getDiary: getDiary,
    getCompose : getcompose,
    getViewPage : getViewPage,
    getNewDiaries : getNewDiaries,
    postNewDiaries : postNewDiaries,
    postCompose : postCompose
};

module.exports.routesHandler = handler