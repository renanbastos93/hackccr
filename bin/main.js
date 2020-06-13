const mongoose = require("mongoose")
const config = require("config")
const api = require("./../app/app")


mongoose.connect(config.get("database.conn"), config.get("database.opt"))
api(config.get("server.port"))

