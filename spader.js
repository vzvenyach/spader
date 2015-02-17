var request = require('request');
var fuzzy = require('fuzzy');

module.exports = {
  
  // Replace two periods after a sentence with one
  replaceTwoSpacesAfterPeriod: function (content) {
    return content.replace(/(\.)(\s\s)/g,". ")
  },

  // Checks to see whether a case citation is valid
  // TODO: Figure out how to get this to return the value instead of calling it back...
  checkCaseCitation: function(citation, callback) {
    cite = [citation.vol, citation.reporter, citation.page].join("/")
    getCase(cite, function (res) {
      callback(res)
    })
  },
  checkQuoteWithinCaseCitation: function (citation, quotation, callback) {
    cite = [citation.vol, citation.reporter, citation.page].join("/")
    request.get('https://permafrast.herokuapp.com/' + cite +'.json?fulltext=true', function (error, response, body) {
      if (response.statusCode == 200) {
        var ft = JSON.parse(response.body)[0].fetched_page
        var results = ft.search(quotation)
        if (results != -1) {
          callback(true)
        }
        else {
          callback(false)
        }
      }
      else {
        callback(false);
      }
    })
  }
}

function getCase (cite, callback) {
  request.get('https://permafrast.herokuapp.com/' + cite +'.json', function (error, response, body) {
    if (response.statusCode == 200) {
      callback(true);
    }
    else {
      callback(false);
    }
  })
}