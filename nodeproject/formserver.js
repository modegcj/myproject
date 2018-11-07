var http = require('http');
var fs = require("fs");
var events = require('events');

var eventEmitter = new events.EventEmitter();

// <!--
// var listener1 = function listener1(){
//     console.log('监听事件触发')
// }
// var listener2 = function listener2(){
//     console.log('绑定事件触发')
// }
// eventEmitter.addListener('connection',listener1);
// eventEmitter.on('connection',listener2);
// var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners + "Listener(s) listening to connection event");
// eventEmitter.emit("connection");
// eventEmitter.removeListener('connection',listener1);
// console.log('Listener1 will not listener now');
// eventEmitter.emit("connection");
// eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners + 'Listener(s) listening to connection event');
// -->
// <!--
// fs.readFile('../node.txt',function(err,data){
//     if (err) return console.error(err);
//     console.log(data.toString());
// })
// -->

var data = 'Simply Easy Learning';
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data,'UTF8');
writerStream.end();
writerStream.on('finish',function(){
    console.log("Write completed");
})
writerStream.on('error',function(err){
    console.log(err.stack)
})
var readerStream = fs.createReadStream('output.txt');
readerStream.setEncoding('UTF8');
readerStream.on('data',function(chunk){
    data += chunk;
})
readerStream.on('end',function(){
    console.log(data);
})
readerStream.on('error',function(err){
    console.log(err.stack);
})




http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World');
}).listen(8080,'127.0.0.1');

