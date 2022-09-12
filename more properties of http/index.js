// import http from 'http';
const http = require('http');
const data = require('./data');
console.log(data)

const PORT = process.env.PORT || 8000;
const server =  http.createServer((req,res)=>{
    if(req.url != '/favicon.ico'){
        console.log(req.url);
    }
    res.setHeader("content-type","text/plain");
    res.end(data);
})

server.listen(PORT,()=>{
    console.log(`Server is working at http://localhost:${PORT}`)
})