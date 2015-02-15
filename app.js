var Spader = require('./spader');
var Citation = require('citation');

var stringToCheck = "It is emphatically the province and duty of the judicial department to say what the law is.  Marbury v. Madison, 5 U.S. 137 (1803).  But no one should have two spaces..."

cite = Citation.find(stringToCheck).citations[0].reporter;
console.log(Spader.replaceTwoSpacesAfterPeriod(stringToCheck))

Spader.checkCaseCitation(cite, function (res) {
	if (!res) {
		console.log("Citation Error: " + cite)	
	} 
})