const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

var VehicleSchema = new Schema({
    name:String,
    licensePlate: String,
    lastUsed:String,
    clientId:String,
    type:{
        color:String,
        model:String,
        year:Date
    }
});

var Vehicle = Model('Vehicle', VehicleSchema, "Vehicle");

module.exports = Vehicle;