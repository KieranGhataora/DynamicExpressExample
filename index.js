var express = require('express');
var fs = require('fs');

var app = express();
var replacementValue = process.env.REPLACEMENT_VALUE || new Date().toTimeString();


app.get('/', (req, res) => {
    var file = fs.readFileSync('./test.html','utf8')
    var dynamicFile = file.replace('<div id="test">', `<div id="test">${replacementValue}`)
    res.send(dynamicFile);
});

var server = app.listen(3000, () => {});