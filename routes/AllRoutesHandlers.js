const getDashboard = require( __dirname + "/getDashboard.js");


// const handler {
// 	this.getDashboard = getDashboard
// 	constructor() 
// }

const handler = {
    getDashboard : getDashboard
};

module.exports.routesHandler = handler