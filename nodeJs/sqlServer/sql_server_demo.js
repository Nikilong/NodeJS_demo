var mysql  = require('mysql');

var connection = mysql.createConnection({
                                        host     : 'localhost',
                                        user     : 'root',
                                        password : '',
                                        port: '3306',
                                        database: 'work'
                                        });

connection.connect();

//var  sql = 'SELECT * FROM websites';
var  sql = 'SELECT no,name,data,startTime,endTime,timestampdiff(hour,startTime,endTime) as "加班时间" FROM sign where timestampdiff(hour,startTime,endTime)>10';
//查
connection.query(sql,function (err, result) {
                 if(err){
                 console.log('[SELECT ERROR] - ',err.message);
                 return;
                 }
                 
                 console.log('--------------------------SELECT----------------------------');
                 console.log(result);
                 console.log('------------------------------------------------------------\n\n');
                 });

connection.end();
