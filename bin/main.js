const mongoose = require("mongoose")
mongoose.connect('mongodb://mongodb/hackccr', {useUnifiedTopology: true, useNewUrlParser: false})


const api = require("./../app/app")
api()

