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