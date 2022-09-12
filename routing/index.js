import { fstat } from 'fs';
import http from 'http';
import fs from 'fs';


const PORT = process.env.PORT || 8000;
const server = http.createServer((req,res)=>{
 if(req.url == '/'){
    fs.readFile('./public/index.html',(error,data)=>{
        if(error) throw error;
        res.end(data);
    })
 }
 if(req.url == '/about'){
    fs.readFile('./public/about.html',(error,data)=>{
        res.end(data)
    })
 }

}) 
server.listen(PORT,()=>{
console.log(`server is working http://localhost:${PORT}`)
})