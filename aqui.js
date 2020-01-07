var express = require('express');
var app = express();

    app.get('/',function(req,res){
        res.send("Programador Full stack");
    });
    app.get('/back-end',function(req,res){
        res.send("Tecnologias back-end: Nodejs,Python,PHP,MySQL..");
    });
    app.get('/infraestrutura',function(req,res){
        res.send("AzureCLoud,LInux,MySQL Server..");
    });
 
    app.listen(3003,function(){
        console.log("oiii");
    })