'use strict';
/*jshint node: true*/
process.env.NODE_ENV = 'TEST';
var chai = require('chai');
var chaihttp = require('chai-http');
var app = require('../server');
chai.use(chaihttp);

describe('Simple JSON API', function () {
    //var data;
    it("/time/ should get the time", function (done) {
        chai.request(app)
            .get('/time')
            .end(function (err, res) {
                chai.expect(err).to.be.null;
                console.log('minute is: ' + res.body.minute);
                chai.expect(res.body.minute).to.equal(new Date().getMinutes());
                done();
            });
    });

    it('/name/:name should greet someone', function (done) {
        chai.request('http://localhost:3000')
            .get('/name/Charles')
            .end(function (err, res) {
                chai.expect(err).to.be.null;
                console.log(res.body);
                chai.expect(res.body.msg).to.equal('Hello, Charles!');
                done();
            });
    });
});
