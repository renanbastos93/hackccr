const express = require('express')
require('express-group-routes');
const bodyParser = require("body-parser")
const app = express()

const listUserEndpoints = require("./user/endpoint")
const listLocalEndpoints = require("./locals/endpoint")

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
    Setup(listUserEndpoints)
    Setup(listLocalEndpoints)
    app.listen(port, () => console.log(`App listening at 0.0.0.0:${port}`))
}

module.exports = ListenAPI;