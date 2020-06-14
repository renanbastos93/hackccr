const express = require('express')
require('express-group-routes');
const bodyParser = require("body-parser")
const app = express()

const endpointsUtil = require("./endpoints/utils")
const listUserEndpoints = require("./user/endpoint")
const listVehiclesEndpoints = require("./vehicle/endpoint")
const listLocalEndpoints = require("./locals/endpoint")
const listPointEndpoints = require("./points/endpoint")
const listRatingEndpoints = require("./rating/endpoint")

const middleware = (_, response, next) => {
    // response.append("Cache-Control", "public, max-age=120");
    response.append("Access-Control-Allow-Origin", "*");
    response.append("Access-Control-Allow-Credentials", true)
    response.append("Access-Control-Allow-Methods", ["GET", "POST", "PUT", "OPTIONS"]);
    response.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, User");
    return next();
};

function Setup(listEndpoints) {
    app.group("/api", (router) => {
        for(let i=0; i<listEndpoints.length; i++) {
            let ep = listEndpoints[i];
            router[ep.Method](ep.Route, ep.Func)
        }
    })
}

function ListenAPI(port) {
    app.use("/", express.static('public'))
    app.use("/api", middleware, 
        bodyParser.json(), 
        bodyParser.urlencoded({ extended: false }), 
        endpointsUtil.verifyToken)

    Setup(listUserEndpoints)
    Setup(listVehiclesEndpoints)
    Setup(listLocalEndpoints)
    Setup(listPointEndpoints)
    Setup(listRatingEndpoints)


    app.listen(port, () => console.log(`App listening at 0.0.0.0:${port}`))
}

module.exports = ListenAPI;