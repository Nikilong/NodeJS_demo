'use strict';

var fn_hello = async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `welcome, ${name}`;

};

// module.exports = {
//     'GET /hello/:name': fn_hello
// };
module.exports = [
    {
        method:"GET",
        path:"/hello/:name",
        func:fn_hello
    },
];