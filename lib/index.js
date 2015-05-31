'use strict';
var fs = require('fs');
var path = require('path');
var es = require("event-stream");
var mircoTemplate = require('./microTemplate');
var inquire = require('./userInput');

inquire.then(function(answers) {

    fs.createReadStream(path.normalize(path.join(__dirname, 'templates/_package.json')))
        .pipe(es.split())
        .pipe(es.wait())
        .pipe(es.mapSync(function(data) {
            return mircoTemplate(data, {
                moduleName: answers.moduleName,
                version: answers.version,
                author: answers.author,
                desc: answers.desc,
                personalUrl: answers.personalUrl,
                username: answers.username
            });
        }))
    // change output to users dir
    .pipe(fs.createWriteStream(path.normalize(path.join(__dirname, 'templates/package.json'))));
});