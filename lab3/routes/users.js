const express =  require('express');
const router = express.Router();
const UserModel = require('../models/users')

router.get('/',async(req,res)=>{
    await UserModel.find({}).populate('posts').exec((err,user)=>{
        if(err)
        {console.log("error is ",err);//errror handling 
        return res.send(err); }
        res.json(user); 
        
    })
    // res.send('hello GET /');
});
router.get('/:id',async(req,res)=>{
    await UserModel.findOne({_id:req.params.id},(err,user)=>{
        if(err)
        {console.log("error is ",err);//errror handling 
        return res.send(err); }
        res.json(user); 
        
    })
    // console.log(req.params);
    // res.send(`hello GET /users/${req.params.id} `);
});
router.get('/:id/posts',async (req,res)=>{
   await UserModel.find({_id:req.params.id}).
    populate('posts')
    // populate({path:'author', populate:{
    //     path: 'posts',
    //   }})
    .exec((err,user)=>{
        if(err)
        return res.send(err); 
        res.json(user);

    })
});
router.post('/', (req,res)=>{
    let  {body : {firstName,
        lastName,
        email,
        password,
        posts } }  = req;
    let user= new UserModel({
        firstName,
        lastName,
        email,
        password,
        posts,
    })
    const fullName =user.getFullName();
    console.log(fullName);
    
    // res.send(body);
    
    user.save(function(err,user) {
        if (err) return res.send(err);
        // user.comparePassword(req.params.password, function(err, isMatch) {
        //     if (err) throw err;
        //     console.log(req.params.password, isMatch); 
        // });
        res.send(user);
    });
});
router.patch('/:id',(req,res)=>{
   
    UserModel.findByIdAndUpdate(req.params.id,req.body,{new: true},(err,user)=>{
        if(err)
        return res.send(err); 
        res.send(user);

    })
});
router.delete('/:id',(req,res)=>{
    UserModel.findByIdAndRemove({_id:req.params.id}, req.body, function(err, user) {
        if(err)
        return res.send(err); 
        res.send(user);

    })
});



module.exports = router;