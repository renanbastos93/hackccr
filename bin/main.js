const mongoose = require("mongoose")
mongoose.connect('mongodb://mongodb/hackccr', {useUnifiedTopology: true, useNewUrlParser: true})


const api = require("./../app/app")
api()

