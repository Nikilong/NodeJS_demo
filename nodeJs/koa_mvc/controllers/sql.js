'use strict';

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lcqbook14',
    port: '3306',
    database: 'work'
});

function excuteSql(sql,ctx) {

    connection.connect();
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }

        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        console.log('------------------------------------------------------------\n\n');
        ctx.response.body = {'statu':'success','data':'none'};
    });

    connection.end();
}

var fn_sql = async (ctx, next) => {
    var order = ctx.request.body.order;
    console.log(ctx.request.body.order)
    switch(order){
        case '1':
            var sql = "select * from hhh.score;"
            excuteSql(sql,ctx);
            return;
        case '2':
            var sql = "select * from hhh.score;"
            excuteSql(sql,ctx);
            return;
        default:
            console.log('invalid Sql order')
            return;
    }

};



module.exports = [{
    method: "POST",
    path: "/sql",
    func: fn_sql
}];