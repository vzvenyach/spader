var Spader = require('./spader');
var Citation = require('citation');
var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));


function start(callback) {
  fs.readFile(argv.f, 'utf-8', function (err, data) {
    callback(data)  
  })
}

function getCitations(stream, callback) {
  cites = Citation.find(stream).citations
  callback(cites)
}

var goodCitation = {"vol":"600","reporter":"F.3d","page":"642"}
Spader.checkQuoteWithinCaseCitation(goodCitation, " unmentioned by the Commission", function (res) {
  console.log(res)
})