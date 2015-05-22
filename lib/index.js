'use strict';
var fs = require('fs');
var path = require('path');
var es = require("event-stream");
var mircoTemplate = require('./microTemplate');

fs.createReadStream(path.normalize(path.join(__dirname, 'templates/_package.json')))
    .pipe(es.split())
    .pipe(es.wait())
    .pipe(es.mapSync(function(data){
        return mircoTemplate(data, {
            moduleName: 'my-cool-module',
            version: '1.0.0',
            author: 'David Annopolsky <davidchase03@gmail.com>',
            desc: 'Some cool description yay!',
            personalUrl: 'http://abc.com',
            username: 'davidchase'
        });
    }))
    .pipe(fs.createWriteStream(path.normalize(path.join(__dirname, 'templates/package.json'))));