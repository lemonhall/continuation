var util = require('util');
var esmangle = require('esmangle');
var escodegen = require('escodegen');

var parser = require('./parser');
var transform = require('./transform');

exports.transform = function (code) {
  var ast = parser.parse(code);
  ast.normalize();
  //console.log(util.inspect(ast, false, null, true));
  transform.transformBlock(ast);
  return escodegen.generate(ast);
};