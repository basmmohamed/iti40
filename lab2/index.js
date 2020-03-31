// const http = require('http');
// const server = http.createServer();
// server.listen(4000);
const express =  require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');; 
const postRouter = require('./routes/posts');; 

const PORT = process.env.PORT || 5000;
const app = express();

mongoose.connect('mongodb://localhost:27017/blogSystem',{
    useNewUrlParser: true,  
    useUnifiedTopology: true,
},(err)=>{
    if (!err)
    console.log('started connect mongo')
    
})

app.use(express.json());
app.use('/users',userRouter)
app.use('/posts',postRouter)


app.listen(PORT,(err)=>{if (!err)
console.log(`started server on port ${PORT}`);
});