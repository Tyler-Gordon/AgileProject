const express = require('express');
var app = express();
const port = process.env.PORT || 3000;
var basicChampionInfo;

const getChampions = require('./getChampions').getChampions;

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + './public/index.html');
});

app.get('/champions', (request, response) => {
    let champions = []
    basicChampionInfo.forEach(champion => {
        champion = champion
        champions.push({
            name : champion.name,
            icon : `http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/${champion.id}.png`,
            image : `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`
        });
    });
    response.send(champions);
});

app.listen(port, () => {
    getChampions((data) => {
        basicChampionInfo = data;
    });
});