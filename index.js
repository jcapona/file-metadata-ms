var express = require('express');
var app = express();
var path = require('path');
var util = require('util');
var multer  = require('multer');
var upload = multer({ dest: './uploads' });

// ROUTES 
app.set('port', (process.env.PORT || 5000));

app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get("*", function(request, response) {
  response.redirect("/");
});

app.listen(app.get('port'));

app.post('/upload/', upload.single('upfile'), function (req, res) {
  res.json({"name": req.file.originalname,"type": req.file.mimetype,"size": req.file.size});
});


