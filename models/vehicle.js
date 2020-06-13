const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

var VehicleSchema = new Schema({
    licensePlate: String,
    lastUsed:String,
    type:{
        color:String,
        model:String,
        year:Date
    }
});

var Vehicle = Model('Vehicle', VehicleSchema, "Vehicle");

module.exports = Vehicle;