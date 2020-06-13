const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

const geoSchema = new Schema({
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: {
      type: [Number]
    }
},{
    versionKey:false
});

var LocalSchema = new Schema({
    name: String,
    location: {
        type: geoSchema,
        index: '2dsphere'
    },
    lat: Number,
    lng: Number,
    place_id: {
        type: String,
        index: true,
        unique: true
    },
    types: Array,
    isPartner: Boolean,
},{
    versionKey:false
});

var Local = Model('Local', LocalSchema, "Local");

module.exports = Local;