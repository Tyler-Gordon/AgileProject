// Node and npm modules
const express = require('express');

// Project modules
const getData = require('./private/getData');

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
    let championID = request.query.id;
    getData.ChampionStats(championID, (data) => {
        var spellUrl = `http://ddragon.leagueoflegends.com/cdn/9.8.1/img/spell/`
        var passiveUrl = `http://ddragon.leagueoflegends.com/cdn/9.8.1/img/passive/${data.passive.image.full}`

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
                attackspeedperlevel : data.stats.attackspeedperlevel,
                passiveicon : passiveUrl,
                qicon : spellUrl + data.spells[0].image.full,
                wicon : spellUrl + data.spells[1].image.full,
                eicon : spellUrl + data.spells[2].image.full,
                ricon : spellUrl + data.spells[3].image.full
            }

        response.send(championData);
    });
});

app.get('/calcuate', (req, res) => {
    res.send('hello')
})

app.listen(port, () => {
    getData.Champions((data) => {
        champions = data;
    });
    getData.Items((data) => {
        items = data;
    });
});