var express = require('express')

app = express()
//request query
app.get('/', function(req,res){
    let fname = req.query.firstname;
    let lname = req.query.lastname;

    res.end(fname +" "+ lname)
});

app.listen(7070,function(){
    console.log("server run success")
});