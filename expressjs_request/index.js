var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')

//var multer = multer()

var app = express()


//app.use(bodyParser.json())
//get request query
// app.get('/header', function(req,res){
//     let fname = req.header('firstname');
//     let lname = req.header('lastname');

//     res.end(fname +" "+ lname)
// });

// //post request query
// app.post('/', function(req,res){
//     let fname = req.header('firstname');
//     let pass = req.header('pass');

//     res.end(fname +" "+ pass)
// });

//Json request query
// app.post('/', function(req,res){
//     let JSOnData =  req.body;
//     let JSONString = JSON.stringify(JSOnData);
    

//     res.send(JSONString)
// });

//Using of multer form data
// app.use(multer.array())
// app.use(express.static('public'))

// app.post('/', function(req,res){
//     let JSONData = req.body;
//     res.send(JSON.stringify(JSONData))
// })


//upload a file using multer
var storage = multer.diskStorage({
    destination: function(req,file,callBack){
        callBack(null,'./uploads');
    },
    filename: function(req,file,callBack){
        callBack(null,file.originalname)
    }
})


var upload = multer({storage:storage}).single('myfile')
app.post('/', function(req,res){
    upload(req,res,function(error){
        if(error){
            res.send("File upload fail")
        }else{
            res.send("File upload success")
        }
    })
});

app.listen(8080,function(){
    console.log("server run success")
});