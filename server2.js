var express = require('express');
var app = express();

app.set('view engine','ejs')

    app.get('/',function(req,res){
        res.render('./secao/frontend.ejs');
    });
    app.get('/back-end',function(req,res){
        res.render('./secao/backend.ejs');
    });
    app.get('/infraestrutura', function(req,res){
        res.send('./secao/infra.ejs');
    });
 
    app.listen(3003, function(){
        console.log("oiii");
    })