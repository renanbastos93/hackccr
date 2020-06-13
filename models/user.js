const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

var UserSchema = new Schema({
    clientId: {
        type: String,
        index: true,
        unique: true
    },
    name: String,
    lastName: String,
    phone: String,
    password: String,
    freelancer: Boolean,
},{
    versionKey:false
});

var User = Model('User', UserSchema, "User");

module.exports = User;