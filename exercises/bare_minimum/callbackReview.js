/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(err, data.split('\n')[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // use needle get. include args with url, and callback with err and response params
  request.get(url, (err, response) => {
    // if error
    // console.log('response: ', response);
    // console.log('url: ', url);
    if (err) {
      // set status to 404
      // statusCode = 404;
      // callback on error
      callback(err);
    } else {
      // else
      // response.statusCode is 200
      // statusCode = 200;
      callback(err, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
