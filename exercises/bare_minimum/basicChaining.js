/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var Promise = require('bluebird');
var request = Promise.promisify(require('request'));
var getProfile = require('./promisification.js').getGitHubProfileAsync
var fs = Promise.promisifyAll(require('fs'));

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return fs.readFileAsync(readFilePath)
  .then((fileName)=>{
    // console.log('FileName',fileName)
    return fileName.toString()
  })
  .then((file) => {
    // console.log('file', file)
    return file.split('\n').shift()
  })

  .then((username)=>{
    return getProfile(username)
  })

  .then((data)=>{
    return fs.writeFileAsync(writeFilePath, JSON.stringify(data));
  })

};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
