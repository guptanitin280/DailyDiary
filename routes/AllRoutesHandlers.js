const getDashboard = require( __dirname + "/getDashboard.js");
const login = require(__dirname+"/login.js");
const register = require(__dirname+"/register.js");
const logout = require(__dirname+"/logout.js");

const handler = {
    getDashboard : getDashboard,
    login : login,
    register : register,
    logout : logout
};

module.exports.routesHandler = handler