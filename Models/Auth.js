const mongoose = require("mongoose")

const UserSchma = new mongoose.Schema({

    firstname: {
        type: String,
        required: [true, "Please enter firstname"]
    },

    lastname: {
        type: String,
        required: [true, "Please enter lastname"]
    },

    email: {
        type: String,
        required: [true, "Please enter email"]
    },

    phone: {
        type: Number,
        required: [true, "Please enter email address"]
    },

    password: {
        type: String,
        required: [true, "Please enter Password"]
    }
})

module.exports = mongoose.model("User",UserSchma )