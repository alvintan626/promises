/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  //Find a way get the file
  //display all the contents of the file
  //reutrn the first line of the file 

  fs.readFile(filePath, function(err, data) {
    //if firstline is falsy return an error and null to callback
    //else return null on error and string as 2nd arg
    if (err){
      callback(err, null)
    }
    else {
      callback(null, data.toString().split('\n').shift())
     }
  
  });
}
// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request(url, function (error, response) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode);

  if (error){
    callback(error, null)
  }else{
    callback(null,response.statusCode)
  }


});
  


};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
