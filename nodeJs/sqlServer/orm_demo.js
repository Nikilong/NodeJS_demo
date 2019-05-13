
const Seq = require("sequelize");

var config = {
    host: 'localhost',
    user: 'root',
    password: 'lcqbook14',
    port: '3306',
    database: 'hhh'
}
var seq = new Seq(config.database,config.user,config.passwork,{
    host:config.host,
    dialect:"mysql",
    pool:{
        max:5,
        min:0,
        idle:3000
    }
});
