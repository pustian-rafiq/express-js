var express = require('express')

app = express()
//get request query
app.get('/header', function(req,res){
    let fname = req.header('firstname');
    let lname = req.header('lastname');

    res.end(fname +" "+ lname)
});

//post request query
app.post('/', function(req,res){
    let fname = req.header('firstname');
    let pass = req.header('pass');

    res.end(fname +" "+ pass)
});

app.listen(7070,function(){
    console.log("server run success")
});