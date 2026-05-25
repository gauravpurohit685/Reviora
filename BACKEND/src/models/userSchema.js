const mongoose = require("mongoose");
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },

    lastName: {
        type: String,
        required: true,
        trim: true
    },

    emailId: {
        type: String,
        required: true,
        unique: true,

        validate(value){
            if(!validator.isEmail(value)){
                throw new error("Invalid email address");
            }
        }
    },

    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);