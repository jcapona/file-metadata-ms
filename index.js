var express = require('express');
var app = express();
var path = require('path');
var util = require('util');
var formidable = require('formidable');

// ROUTES 
app.set('port', (process.env.PORT || 5000));
//app.set('view engine', 'jade');

app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get("*", function(request, response) {
  response.redirect("/");
});

app.post("/api/analyze/", function(req, res){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        res.json(files.file);
    });
});

app.listen(app.get('port'));


