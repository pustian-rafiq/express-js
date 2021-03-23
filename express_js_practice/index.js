var express = require('express');
app = express();

//res.send()---- response er body k nirdesh kore
    //res.end()---response ses obostha k nirdesh kore
    //res.status(ekhane ekta status code bosbe)
    app.get("/send",function(req,res){
        res.send("Hello Express Js--it is send");
        
    });
    app.get("/end",function(req,res){
        res.end("Hello Express Js--it is end");
        
    });
    app.get("/status",function(req,res){
        res.status(401).end("Unauthor");
        
    });

    app.get("/json",function(req,res){
        var jsonArray = [
            {
                name:"Rafiqul",
                age: "25"
            },
            {
                name:"Rabiul",
                age: "28"
            }
        ]
        res.json(jsonArray);
        
    });

    app.get("/download",function(req,res){
        res.download("./upload/img.jpg");
        
    });

    
    app.get("/bangladesh",function(req,res){
        res.redirect("http://localhost:8080/india");
        
    });

    
    app.get("/india",function(req,res){
        res.send("This is india");
        
    });


app.listen(8080, function(){
    console.log("Server run success")
})