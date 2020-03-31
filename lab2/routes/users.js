const express =  require('express');
const router = express.Router();
const UserModel = require('../models/users')

router.get('/',(req,res)=>{
    UserModel.find({},(err,user)=>{
        // if(err)
        // return res.send(err); 
        res.json(user); 
        
    })
    // res.send('hello GET /');
});
router.get('/:id',(req,res)=>{
    UserModel.findOne({_id:req.params.id},(err,user)=>{
        if(err)
        return res.send(err); 
        res.json(user); 
        
    })
    // console.log(req.params);
    // res.send(`hello GET /users/${req.params.id} `);
});
router.post('/', (req,res)=>{
    let  {body : {firstName,
        lastName,
        email,
        password } }  = req;
    let user= new UserModel({
        firstName,
        lastName,
        email,
        password,
    })
    // console.log(body);
    
    // res.send(body);
    user.save((err,user)=>{
        if(err)
        return res.send(err); 
        res.send(user);
    })
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