const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

var PointSchema = new Schema({
    "clientId": String,
    "points":  {
        "qtd": Number,
        "action": [
            {
                "qtd": Number,
                "when": Date,
                "how": String
            }
        ],
        "used": [
            {
                "qtd": Number,
                "for": String
            }
        ]
    }
},{
    versionKey:false
});

var Point = Model('Point', PointSchema, "Point");

module.exports = Point;