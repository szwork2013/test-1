/**
 * Created by wyq on 2016/1/21.
 */
var util = require('util');

var a = "AAA";

var str = util.format("test: %j", a);

console.log(str);

util.exec("ls e:/", function (err, stdout, stderr) {
	console.log(arguments);
});

