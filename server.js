// Node and npm modules
const express = require('express');

// Project modules
const getData = require('./getData');

// Project variables
var app = express();
const port = process.env.PORT || 3000;
var champions;
var items;

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + './public/index.html');
});

app.get('/champions', (request, response) => {
    let championSelectionData = [];
    champions.forEach(champion => {
        championSelectionData.push({
            id : champion.id,
            name : champion.name,
            icon : `http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/${champion.image.full}`,
            image : `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`
        });
    });
    response.send(championSelectionData);
});

app.get('/items', (request, response) => {
    let itemSelectionData = [];
    items.forEach(item => {
        itemSelectionData.push({
            id : item[0],
            name : item[1].name,
            icon : `http://ddragon.leagueoflegends.com/cdn/9.8.1/img/item/${item[0]}.png`
        });
    });
    response.send(itemSelectionData);
});

app.get('/choose', (request, response) => {
    championID = request.query.id;
    getData.SpecificChampion(championID, (data) => {
        var championData = {
                hp : data.stats.hp,
                hpperlevel : data.stats.hpperlevel,
                mptype : data.partype,
                mp : data.stats.mp,
                mpperlevel : data.stats.mpperlevel,
                movespeed : data.stats.movespeed,
                armor : data.stats.armor,
                armorperlevel : data.stats.armorperlevel,
                spellblock : data.stats.spellblock,
                spellblockperlevel : data.stats.spellblockperlevel,
                attackrange : data.stats.attackrange,
                hpregen : data.stats.hpregen,
                hpregenperlevel : data.stats.hpregenperlevel,
                mpregenperlevel : data.stats.mpregenperlevel,
                attackdamage : data.stats.attackdamage,
                attackdamageperlevel : data.stats.attackdamageperlevel,
                attackspeed : data.stats.attackspeed,
                attackspeedperlevel : data.stats.attackspeedperlevel
            }
        response.send(championData);
    });
});


app.listen(port, () => {
    getData.Champions((data) => {
        champions = data;
    });
    getData.Items((data) => {
        items = data;
    });
});