const express =  require('express');
const router = express.Router();
const PostModel = require('../models/posts')

router.get('/',(req,res)=>{
    PostModel.find({}).
    populate([
        {
          path: "author",
          select: ["firstName","lastName"]
        }
      ])
    // populate('author','firstName')
    
   .exec((err,post)=>{
        if(err)
        return res.send(err); 
        res.json(post); 
        
    })
    // res.send('hello GET /');
});
router.get('/:id',(req,res)=>{
    PostModel.findOne({_id:req.params.id},(err,post)=>{
        if(err)
        return res.send(err); 
        res.json(post); 
        
    })
  
});
router.post('/', (req,res)=>{
    let  {body : { title,
        content,
        author
         } }  = req;
    let post= new PostModel({
        title,
        content,
       author,
    })
    
    post.save((err,post)=>{
        if(err)
        return res.send(err); 
        res.send(post);
    })
});
router.patch('/:id',(req,res)=>{
   
    PostModel.findByIdAndUpdate(req.params.id,req.body,{new: true},(err,post)=>{
        if(err)
        return res.send(err); 
        res.send(post);

    })
});
router.delete('/:id',(req,res)=>{
    PostModel.findByIdAndRemove({_id:req.params.id}, req.body, function(err, post) {
        if(err)
        return res.send(err); 
        res.send(post);

    })
});



module.exports = router;