var http = require('http');
var request = require('request');

req();

var requestLoop = setInterval(req, 10 * 60000);

function req() {
    request({
        url: "http://tnsads.ml",
        method: "GET",
        timeout: 10000,
        followRedirect: true,
        maxRedirects: 10
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(new Date().toString() + ' > success!');
        } else {
            console.log('error' + response.statusCode);
        }
    });
}