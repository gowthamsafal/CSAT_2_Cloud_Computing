const express = require('express');
const server = express();
const PORT = 8080;
server.get('/',(req,res)=>{
    res.send("<h1>GOWTHAM SAFAL!!!</h1>");
    res.end();
});

server.get('/Home',(req,res)=>{
    res.send("<h1>Home</h1>");
    res.end();
});

server.listen(process.env.PORT|| 8080,()=>{
    console.log("Server running");
});


