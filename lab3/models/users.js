
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName : {type:String,required:true},
    lastName : {type:String,required:true},
    email : {type:String,required:true,unique:true,match:/.+@.+\..+/},
    password:String,
    posts : [{ type:mongoose.Schema.Types.ObjectId,ref:'Post',required:true}],

});
userSchema.methods.getFullName=function(){
    return this.firstName+''+this.lastName;
}
const UserModel = mongoose.model('User',userSchema);
module.exports=UserModel;