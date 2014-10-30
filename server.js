/*jshint strict: true, node: true*/
'use strict';

var express = require('express'),
    app = express(),
    port = (process.env.PORT || 3000);

app.get('/time', function (req, res) {
    var d = new Date();
    var data = {
        time: d,
        hour: d.getHours(),
        minute: d.getMinutes(),
        second: d.getSeconds()
    };
    console.log("time is called");
    res.json(data);
});

app.get('/name/:msg', function (req, res) {
    var msg = {
        msg: 'Hello, ' + req.params.msg + '!'
    };
    res.json(msg);

});

app.listen(port, function () {
    console.log("running on port: " + port);
});