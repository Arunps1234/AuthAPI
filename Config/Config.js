const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://psaruna748:Oa8DwKQNa8kgUmjw@cluster0.hzs68mc.mongodb.net/user_auth").then(Res=>{
    console.log("Connected to database")
}).catch(err=>{
    console.log(err)
})