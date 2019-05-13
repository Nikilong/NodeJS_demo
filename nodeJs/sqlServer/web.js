var db=require("./sql_server_demo.js");
app.get("/index.html",function(req,res){
        db.connect("select * from t_user",function(error,data){
                   console.log(data);
                   });
        res.send("<h1>success</h1>");
        });
