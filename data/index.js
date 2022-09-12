import express from 'express';
// const express = require('express');
import  Data  from './data';
const app = express();
const PORT = process.env.PORT || 5000;

// console.log(data)

app.get('/',(req,res)=>{
    // res.send(data)
})

app.listen(PORT,()=>{
    console.log("server is wok")
})
