var request = require('request');

module.exports = {
  
  // Replace two periods after a sentence with one
  replaceTwoSpacesAfterPeriod: function (content) {
    return content.replace(/(\.)(\s\s)/g,". ")
  },

  // Checks to see whether a case citation is valid
  // TODO: Figure out how to get this to return the value instead of calling it back...
  checkCaseCitation: function(citation, callback) {
    permaCite = citation.replace(/ /g,"/")
    getCase(permaCite, function (res) {
      callback(res)
    })
  }
}

function getCase (cite, callback) {
  request.get('https://permafrast.herokuapp.com/' + cite +'.json', function (error, response, body) {
    if (response.statusCode != 500) {
      callback(true);
    }
    else {
      callback(false);
    }
  })
}