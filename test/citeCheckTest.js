#!/usr/bin/env node

var test = require("tap").test;
var Spader = require('../spader');

var goodCitation = {"vol":"600","reporter":"F.3d","page":"642"}
var badCitation = {"vol":"600","reporter":"F.3d","page":"641"}

test("Check Citation Tests", function (t) {
  Spader.checkCaseCitation(goodCitation, function (res) {
  	t.ok(res, "This should be good!")
		t.end()
  })
})