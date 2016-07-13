var prompt = require('prompt');

var API_KEY = 'aaf8a89e744536596deb52754d02f615';
var SynonymAPI = require('./library/synonyms.js');


prompt.get('word', function(err, res) {
    if (err) {
        console.log(err);
    }
    var word = res.word;
    var newSearch = new SynonymAPI(API_KEY);
    newSearch.getSynonyms(word, function(err, res) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(res);
        }
    })
})