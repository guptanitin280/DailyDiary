const getDashboard = require( __dirname + "/getRoutes/getDashboard.js");
const postLogin = require(__dirname+"/postRoutes/postLogin.js");
const postRegister = require(__dirname+"/postRoutes/postRegister.js");
const postLogout = require(__dirname+"/postRoutes/postLogout.js");
const getLogin = require(__dirname+"/getRoutes/getLogin.js");
const getHome = require(__dirname+"/getRoutes/getHome.js");
const getRegister = require(__dirname+"/getRoutes/getRegister.js");

const handler = {
    getDashboard : getDashboard,
    getLogin : getLogin,
    postLogin : postLogin,
    getRegister : getRegister,
    postRegister : postRegister,
    postLogout : postLogout,
    getHome : getHome
};

module.exports.routesHandler = handler