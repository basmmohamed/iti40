
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName : {type:String,required:true},
    lastName : {type:String,required:true},
    email : {type:String,required:true,unique:true,match:/.+@.+\..+/},
    password:String,
});
const UserModel = mongoose.model('User',userSchema);
module.exports=UserModel;