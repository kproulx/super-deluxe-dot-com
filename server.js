var express = require('express');
var app = express();
app.use(express.static('public'));
app.enable('trust proxy');

process.env.PORT = process.env.PORT || 5000;

console.log("listening on ", process.env.PORT);
app.listen(process.env.PORT);
