// Node and npm modules
const express = require('express');

// Project modules
const getData = require('./private/getData');
const calculate = require('./private/calculate');

// Project variables
var app = express();
const port = process.env.PORT || 3000;
var champions;
var items;
var championSkillData;
var version;

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
            icon : `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`,
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
            icon : `http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item[0]}.png`
        });
    });
    response.send(itemSelectionData);
});

app.get('/choose', (request, response) => {
    let championID = request.query.id;
    getData.ChampionStats(championID, (data) => {
        var spellUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/`
        var passiveUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${data.passive.image.full}`

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
                spelldamage : 0,
                attackspeed : data.stats.attackspeed,
                attackspeedperlevel : data.stats.attackspeedperlevel,
                autoattackicon : passiveUrl,
                qicon : spellUrl + data.spells[0].image.full,
                wicon : spellUrl + data.spells[1].image.full,
                eicon : spellUrl + data.spells[2].image.full,
                ricon : spellUrl + data.spells[3].image.full
            }

        response.send(championData);
    });
});

<<<<<<< HEAD
app.get('/calcuate', (req, res) => {
    res.send('hello')
=======
app.get('/calculate', express.json(), (request, response) => {
    let champSkills = championSkillData[`${request.body.player.id}`];
    var championDamage = calculate.getDamage(champSkills, request.body);
    response.send(championDamage);
>>>>>>> upstream/master
})

app.listen(port, () => {
    getData.Champions((data) => {
        champions = data;
    });
    getData.Items((data) => {
        items = data;
    });
    getData.getVersion((data) => {
        version = data;
    });
    championSkillData = require('./private/championSkillData');
});