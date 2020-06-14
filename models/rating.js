const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

var RatingSchema = new Schema({
    place: {
        id: String,
        name: String
    },
    ratingId:  {
        type: String,
        index: true,
        unique: true
    },
    clientId: String,
    rating: Number,
    notes: String
});

var Rating = Model('Rating', RatingSchema, "Rating");

module.exports = Rating;