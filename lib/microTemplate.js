'use strict';
var internals = {};
internals.start = '{{';
internals.end = '}}';
internals.expression = '[a-z0-9_][\\.a-z0-9_]*';

var mircoTemplate = function mircoTemplate(template, data) {
    var pattern = new RegExp(internals.start + '\\s*(' + internals.expression + ')\\s*' + internals.end, 'gi');

    return template.replace(pattern, function(tag, token) {
        var tokenArray = token.split('.');

        return tokenArray.reduce(function(acc, tokenStr) {
            if (data[tokenStr] === undefined) {
                throw new Error(tokenStr + ' not found in ' + tag);
            }
            return data[tokenStr];
        }, null);

    });
};

module.exports = mircoTemplate;