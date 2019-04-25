// Node and npm modules
const express = require('express');

// Project modules
const getChampions = require('./getChampions');

// Project variables
var app = express();
const port = process.env.PORT || 3000;
var basicChampionInfo;

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + './public/index.html');
});

app.get('/champions', (request, response) => {
    let champions = []
    basicChampionInfo.forEach(champion => {
        champions.push({
            name : champion.name,
            icon : `http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/${champion.id}.png`,
            image : `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`
        });
    });
    response.send(champions);
});

// app.get('/items', (request, response) => {

// })

app.listen(port, () => {
    getChampions.Basic((data) => {
        basicChampionInfo = data;
    });


});