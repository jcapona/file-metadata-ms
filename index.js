var express = require('express');
var app = express();
var path = require('path');

// ROUTES 
app.set('port', (process.env.PORT || 5000));
//app.set('view engine', 'jade');

app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get("*", function(request, response) {
  response.redirect("/");
});

app.listen(app.get('port'));
