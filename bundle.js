"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 9000;

var app = (0, _express2.default)();

app.get("/", function (req, res) {
	console.log("Receiving");
	res.send("Hello World");
});

app.listen(PORT);
