#!/usr/bin/env node

var test = require("tap").test;
var Spader = require('../spader');

var goodCitation = "600 F.3d 642"
var badCitation = "600 F.3d 641"

test("Check Citation Tests", function (t) {
  Spader.checkCaseCitation(goodCitation, function (res) {
  	t.ok(res, "This should be good!")
		t.end()
  })
})