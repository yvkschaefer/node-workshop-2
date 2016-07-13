// In this file, create and export a constructor function called SynonymAPI. It takes an api key as 
//parameter and sets it on the new object
var request = require('request');

function SynonymAPI(apiKey) {
    this.apiKey = apiKey;
}

SynonymAPI.prototype = {
    getSynonyms: function(word, callback) {
        var url = 'http://words.bighugelabs.com/api/2/' + this.apiKey + '/' + word + '/json';
        request(url, function(err, res) {
            if (err) {
                callback(err);
            }
            else {
                try {
                    var parsed = JSON.parse(res.body);
                    callback(null, parsed)
                }
                catch (err) {
                    callback(err);
                }
            }
        })
    }
};


// In the prototype of SynonymAPI, add a function getSynonyms. It takes a word and a callback. It 
//makes a request to the web api and gives back the results as an object to the callback function.


module.exports = SynonymAPI;