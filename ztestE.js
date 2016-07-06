var rc = require("redis").createClient(6379, "10.10.42.26");
var async = require("async");
var _ = require("underscore");

var start = function () {
	console.time("HMGET");
	var fields = ['a', 'b', 'c', 'd', undefined, 'e', 'f', 'g'];
	rc.HMGET("test", fields, function (err, datas) {
		console.timeEnd("HMGET");   //12ms
		console.log(datas);
	});
};

var start1 = function () {
	console.time("HGET");
	var fields = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
	async.mapSeries(fields, function (field, cb) {
		rc.HGET("test", field, function (err, o) {
			console.timeEnd("HGET");
			return cb(null, o);
		});
	}, function (err, results) {
		console.timeEnd("HGET");    //18ms
		console.log(results);
	});
};

setTimeout(start1, 1000);
//start();



var list = [
	{id: 10, a: 1},
	{id: 11, a: 2},
	{ids: 12, a: 3},
	{id: 13, a: 4},
	{id: 14, a: 5}
];

//console.log(_.pluck(list, "id"));