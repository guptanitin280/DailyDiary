const getDashboard = require( __dirname + "/getRoutes/getDashboard.js");
const postLogin = require(__dirname+"/postRoutes/postLogin.js");
const postRegister = require(__dirname+"/postRoutes/postRegister.js");
const postLogout = require(__dirname+"/postRoutes/postLogout.js");
const getLogin = require(__dirname+"/getRoutes/getLogin.js");
const getHome = require(__dirname+"/getRoutes/getHome.js");
const getRegister = require(__dirname+"/getRoutes/getRegister.js");
const getcompose = require(__dirname+"/getRoutes/getcompose.js");
const getNewDiaries = require(__dirname+"/getRoutes/getNewDiaries.js");
const postNewDiaries = require(__dirname+"/postRoutes/postNewDiaries.js");

const handler = {
    getDashboard : getDashboard,
    getLogin : getLogin,
    postLogin : postLogin,
    getRegister : getRegister,
    postRegister : postRegister,
    postLogout : postLogout,
    getHome : getHome,
    compose : getcompose,
    getNewDiaries : getNewDiaries,
    postNewDiaries : postNewDiaries,
};

module.exports.routesHandler = handler