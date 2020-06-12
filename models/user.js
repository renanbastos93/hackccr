const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

var UserSchema = new Schema({
    name: String,
    phone: Number
});

var User = Model('User', UserSchema, "User");

module.exports = User;