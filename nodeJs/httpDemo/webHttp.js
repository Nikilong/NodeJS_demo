'use strict';

/// <reference path="typings/node/node.d.ts"/>

var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
var express = require("express");
var cors = require("cors");
var app = express()
app.use(cors());
app.use('*', function (req, res, next) {
    console.log("----------------")
    res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
    //res.header('Access-Control-Allow-Origin', 'http://www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS'); //设置方法
    if (req.method == 'OPTIONS') {
        res.send(200); // 意思是，在正常的请求之前，会发送一个验证，是否可以请求。
    } else {
        next();
        'use strict';
        // koa2 针对ES7 语法
        const Koa = require("koa");
        const app = new Koa();
        
        const router = require("koa-router")();
        const bodyPar = require("koa-bodyparser");
        
        app.use(async(ctx,nextt) =>{
            console.log(`${ctx.request.method} ${ctx.request.url}`);
            if(String(ctx.request.url).indexOf("/favicon.ico") > -1){
                ctx.response.status = 403;
            }else{
                await nextt();
            }
        
        });
        
        app.use(bodyPar());
        
        router.get('/hello/:name',async(ctx,next)=>{
            console.log("---")
            var name = ctx.params.name;
            ctx.response.body = `welcome, ${name}`;
        
        });
        
        router.get('/',async(ctx,next)=>{
            ctx.response.body = `<h1>index</h1>
                <form action='/sign' method='post'>
                    <p>name:<input name='name' value='koa'></input></p>
                    <p>password:<input name='password' type='password'></input></p>
                    <p><input value='Submit' type='submit'></input></p>
                </form>
            `;
        });
        
        router.post('/sign',async(ctx,next)=>{
            console.log(ctx.request.body)
            var name = ctx.request.body.name;
            var password = ctx.request.body.password;
            console.log(`signin with name: ${name}, password: ${password}`);
            if(name==="koa" && password==="123"){
                ctx.response.body = `welcom-----${name}!`;
            }else{
                ctx.response.body = `
                    <h1>Login failed</h1>
                    <p><a href='/'>try again</a></p>
                `;
            }
        });
        
        // 使用router
        app.use(router.routes());
        
        app.listen(4000);
        console.log('app started at port 4000...');
    }
});

// // 从命令行参数获取root目录，默认是当前目录:
// var workPath = path.resolve(process.argv[2] || ".");
// console.log('Static root dir: ' + workPath);

// var server = http.createServer(function (request, response) {

//     // response.writeHead('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
//     // //res.header('Access-Control-Allow-Origin', 'http://www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
//     // response.writeHead('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//     // response.writeHead('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS'); //设置方法

//     // response.header["Access-Control-Allow-Origin"] = "*";
//     // response.header["Access-Control-Allow-Headers"] = "";
//     // response.header["Origin, X-Requested-With, Content-Type, Accept"] = "";

//     // console.log(request.method + ":" + request.url);
//     // response.writeHead("200", {
//     //     "content-Type": "text/html"
//     // });
//     // response.end("<h1>hello world</h1>")
//     // console.log(request)
//     // console.log(response)
//     // if (String(request.url).indexOf("/files") > -1) {
//         var urlMap = url.parse(request.url)
//         // console.log(urlMap)
//         var filePath = path.join(workPath, urlMap.pathname)
//         // console.log(filePath)
//         fs.stat(filePath, function (err, stats) {
//             if (!err && stats.isFile()) {
//                 console.log('200 ' + request.url);
//                 response.writeHead('200');
//                 response.end("<h1>hello-----world</h1>")
//                 // fs.createReadStream(filePath).pipe(response);
//             } else {
//                 console.log('404 ' + request.url);
//                 response.writeHead('404');
//                 response.end('404 Not found');
//             }
//         });
//     // }

// });

server.listen("4567");

console.log("Server is running at 127.0.0.1:4567")