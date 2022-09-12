import EventEmitter from 'events';

class MyEmitter extends EventEmitter{}
const myEmitter = new MyEmitter();
myEmitter.on('myevent',()=>{
    console.log("Event occured")
})

myEmitter.emit('myevent')