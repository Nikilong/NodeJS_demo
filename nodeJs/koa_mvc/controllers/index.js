'use strict';

const fs = require('fs');

const path = require('path');
const os = require('os');

var fn_index = async (ctx, next) => {
    ctx.response.body = `<h1>index</h1>
        <form action='/sign' method='post'>
            <p>name:<input name='name' value='koa' style='border:solid 1px #cccccc'></input></p>
            <p>password:<input name='password' type='password' style='border:solid 1px #cccccc'></input></p>
            <p><input value='Submit' type='submit' style='border:solid 1px #cccccc'></input></p>
        </form>
    `;
};

var fn_sign = async (ctx, next) => {
    console.log(ctx.request.body)
    var name = ctx.request.body.name || '';
    var password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === "koa" && password === "123") {
        ctx.response.body = `welcom-----${name}!`;
    } else {
        ctx.response.body = `
            <h1>Login failed</h1>
            <p><a href='/'>try again</a></p>
        `;
    }
}
var fn_getData = async (ctx, next) => {
    console.log('have getdata for anymor');
    ctx.response.body = {
        'statu': 'success',
        'msg': 'none'
    };
}
var fn_postData = async (ctx, next) => {
    var name = ctx.request.body.name || '';
    var password = ctx.request.body.password || '';
    console.log(`have postdata with name: ${name}, password: ${password}`);
    if (name === "koa" && password === "123") {
        ctx.response.body = {
            'statu': 'success',
            'msg': 'welcome'
        };
    } else {
        ctx.response.body = {
            'statu': 'falied',
            'msg': '登录验证失败'
        };
    }
}

var fn_uploadFile = async (ctx, netx) => {

    if ('POST' != ctx.method) return await next();

    const file = ctx.request.files.file;
    const reader = fs.createReadStream(file.path);
    // const stream = fs.createWriteStream(path.join(os.tmpdir(), Math.random().toString()));
    // const stream = fs.createWriteStream(path.join("/Users/Longcq/Documents/ex_code/nodeJs/upload", Math.random().toString()));
    const stream = fs.createWriteStream(path.join("/Users/Longcq/Desktop/NikiTest", file.name));
    reader.pipe(stream);
    console.log('uploading %s -> %s', file.name, stream.path);

    // ctx.redirect('/');
    ctx.response.body = {
        'statu': 'success',
        'msg': 'upload' + file.name,
        'size':file.size,
        'date':new Date(),
    };

    // // var uploadDir = path.normalize(__dirname+'/');
}



// module.exports = {
//     "GET /": fn_index,
//     "POST /sign": fn_sign,
// }
module.exports = [{
        method: "GET",
        path: "/",
        func: fn_index
    },
    {
        method: "POST",
        path: "/sign",
        func: fn_sign
    },
    {
        method: "GET",
        path: "/getData",
        func: fn_getData
    },
    {
        method: "POST",
        path: "/postData",
        func: fn_postData
    },
    {
        method: "POST",
        path: "/upload",
        func: fn_uploadFile
    },
];
