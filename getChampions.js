const http = require('http');
var championsURL = "http://ddragon.leagueoflegends.com/cdn/9.8.1/data/en_US/champion.json";

function getAPI(url, callback) {
    const req = http.request(url, (res) => {
        var data = '';

        // res is a readable stream so we collect its information through the 'data' event
        res.on('data', chunk => {
            data += chunk;
        });
    
        // When there's no more data being sent, then begin manipulating it
        res.on('end', () => {
            data = JSON.parse(data);
            callback(data);
        });
    });
    
    req.on('error', err => {
        console.log(err);
    });
    
    req.end();
}

// Returns a list of champion objects that contains basic info
exports.Basic = (callback) => {
    getAPI(championsURL, (data) => {
        callback(Object.values(data.data));
    });
}


