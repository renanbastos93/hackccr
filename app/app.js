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


function Setup(listEndpoints) {
    app.group("/api", (router) => {
        for(let i=0; i<listEndpoints.length; i++) {
            let ep = listEndpoints[i];
            router[ep.Method](ep.Route, ep.Func)
        }
    })
}

function ListenAPI(port) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(endpointsUtil.verifyToken)

    Setup(listUserEndpoints)
    Setup(listVehiclesEndpoints)
    Setup(listLocalEndpoints)
    Setup(listPointEndpoints)
    Setup(listRatingEndpoints)

    app.listen(port, () => console.log(`App listening at 0.0.0.0:${port}`))
}

module.exports = ListenAPI;