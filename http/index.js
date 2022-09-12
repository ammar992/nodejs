import http from 'http';

const PORT = process.env.PORT || 8000;
const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/plain')
    res.end("It is a response from user");
})


server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})