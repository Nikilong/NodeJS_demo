'use strict';
// koa2 针对ES7 语法
const Koa = require("koa");
const app = new Koa();

app.use(async(ctx,nextt) =>{
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    if(String(ctx.request.url).indexOf("/favicon.ico") > -1){
        ctx.response.status = 403;
    }else{
        await nextt();
    }

});

app.use(async(ctx,next)=>{
    console.log("time-----in");
    const start = new Date().getTime();
    await next();
    console.log("time-----out")
    const st = new Date().getTime() - start;
    console.log(`Time: ${st}ms`);

});

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async(ctx,next) =>{
    console.log("write------in")
    
    await next();
    // 设置response的Content-Type:
    ctx.response.type = "text/html";
    // 设置response的Content-Type:
    ctx.response.body = "./test.html";
    // ctx.response.body = "<h1>hello world ----- koa </h1>";
    console.log("write------out")
});

app.use(async(ctx,next)=>{
    console.log("none------")
});

app.listen(4000);
console.log('app started at port 4000...');