const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({

    email : {
        type : String,
        required : true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("not valid email address");
            }
        }
    },
    password :{
        type : String,
        required : true,
    },
    cpassword :{
        type : String,
        required : true,
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ],
    carts:Array})

    const User = new mongoose.model("User", userSchema);

    module.exports = User;