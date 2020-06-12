const express = require('express')
const app = express()
const port = 3000
const listUserEndpoints = require("./user/endpoint")

function Setup(listEndpoints) {
    for(let i=0; i<listEndpoints.length; i++) {
        let ep = listEndpoints[i];
        app[ep.Method](ep.Route, ep.Func)
    }
}

function ListenAPI() {
    Setup(listUserEndpoints)
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
}

module.exports = ListenAPI;