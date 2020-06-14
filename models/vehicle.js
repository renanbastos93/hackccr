const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

var VehicleSchema = new Schema({
    licensePlate:  {
        type: String,
        index: true,
        unique: true
    },
    clientId: String,
    name: String,
    lastUsed: Boolean,    
    type: {
        color: String,
        model: String,
        year: Date
    }
});

var Vehicle = Model('Vehicle', VehicleSchema, "Vehicle");

module.exports = Vehicle;