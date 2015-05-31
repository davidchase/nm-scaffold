'use strict';
var inquirer = require("inquirer");

var questions = [{
    type: "input",
    name: "moduleName",
    message: "Module name?",
    default: 'my-cool-module',
    filter: function(val) {
        return val.replace(/\s/g, '-').toLowerCase();
    }
}, {
    type: "input",
    name: "version",
    message: "Version Number?",
    default: '1.0.0'
}, {
    type: "input",
    name: "author",
    message: "Author of module?",
    default: 'me'
}, {
    type: "input",
    name: "desc",
    message: "Module description",
    default: 'its soo cool'
}, {
    type: "input",
    name: "personalUrl",
    message: "Website of author/module?",
    default: 'www.github.com'
}, {
    type: "input",
    name: "username",
    message: "Github username?",
    default: 'me'
}, {
    type: 'list',
    name: 'linter',
    message: 'What type of linter?',
    choices: ['jshint', 'eslint'],
    default: 'eslint'
}];

module.exports = new Promise(function(resolve) {
    inquirer.prompt(questions, function(answers) {
        return resolve(answers);
    });
});