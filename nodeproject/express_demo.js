var express = require('express');
var app = express();

// 主页输出"Hello World"
app.get('/',function(req,res){
    res.send('Hello World');
})

// POST请求
app.post('/',function(req,res){
    console.log("主页POST请求");
    res.send('Hello POST');
})


var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为http://%s:%s",host,port)
})

