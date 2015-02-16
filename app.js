var Spader = require('./spader');
var Citation = require('citation');
var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));

stream = fs.readFileSync(argv.f, 'utf-8')

console.log("Checking Citations...")
cites = Citation.find(stream).citations
errorcount = 0

cites.forEach(function (elem, idx, array) {
  if (elem.type == "reporter"){
    Spader.checkCaseCitation(elem.reporter, function (res) {
      if (!res) {
      	errorcount++;
        console.log("Citation Error #" + errorcount + ": " + elem.reporter.id)
      } 
    })
  }
})

console.log(Spader.replaceTwoSpacesAfterPeriod(stream))