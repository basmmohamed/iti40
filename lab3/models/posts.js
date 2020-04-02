
const mongoose = require('mongoose')
const UserModel =require('../models/users')
const postSchema = new mongoose.Schema({
    title : {type:String,required:true},
    content : {type:String,required:true},
    author : { type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}
});
postSchema.post('save',function(){
    if(this.isNew){
UserModel.findByIdAndUpdate(this.author,{$push: {posts:this._id}},()=>{})
    } 
})
const PostModel = mongoose.model('Post',postSchema);
module.exports=PostModel;