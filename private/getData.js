const http = require('http');
var versionURL = 'http://ddragon.leagueoflegends.com/api/versions.json';

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

// Get's the latest version of the ddragon league of legends.
const getVersion = (callback) => {
    getAPI(versionURL, (data) => {
        callback(data[0]);
    });
}

// Returns a list of champion objects that contains basic info
const Champions = (callback) => {
    getVersion((version) => {
        let championsURL = `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`;
        getAPI(championsURL, (data) => {
            callback(Object.values(data.data));
        });
    });
}

// Returns a list of item objects
const Items = (callback) => {
    getVersion((version) => {
        let itemsURL = `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/item.json`;
        getAPI(itemsURL, (data) => {
            callback(Object.entries(data.data));
        });
    });
}

const ChampionStats = (id, callback) => {
    getVersion((version) => {
        let championStatsURL = `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${id}.json`
        getAPI(championStatsURL, (data) => {
            callback(data.data[`${id}`]);
        });
    });
}

module.exports = {
    getVersion,
    Champions,
    Items,
    ChampionStats
}