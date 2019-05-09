// Node and npm modules
const express = require('express');

// Project modules
const getData = require('./private/getData');
const calculate = require('./private/calculate');
const verifySecret = require('./private/verifySignature').verifySecret;

// Project variables
var app = express();
const port = process.env.PORT || 3000;
var champions;
var items;
var championSkillData;
var version;

// Middleware
app.use(express.static('public'));

// Endpoints
app.get('/', (request, response) => {
    response.sendFile(__dirname + './public/index.html');
});

// Called to populate the 
app.get('/champions', (request, response) => {
    let championSelectionData = [];

    champions.forEach(champion => {
        championSelectionData.push({
            id : champion.id,
            name : champion.name,
            icon : `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`,
            image : `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`,
            tags : champion.tags
        });

        // Sort the list of champions based on their name rather than ID
        championSelectionData.sort((a, b) =>{
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
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
            icon : `https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item[0]}.png`,
            stats : item[1].stats,
            effect : item[1].effect,
            maps : item[1].maps 
        });
    });
    let summonersRiftItems = itemSelectionData.filter(item => item.maps["10"] === true);
    response.send(summonersRiftItems);
});

app.get('/choose', (request, response) => {
    // We want to make sure the ID sent is consistent with the server data
    let championID = champions.filter(champion => champion.id === request.query.id);

    if(championID.length > 0) {
        getData.ChampionStats(championID[0].id, (data) => {
            
            var spellUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/`
            var passiveUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${data.passive.image.full}`

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
                    flatarmorpenetration : 0,
                    percentarmorpenetration : 0,
                    flatspellpenetration : 0,
                    percentspellpenetration : 0,
                    critchance : 0,
                    passiveicon : passiveUrl,
                    qicon : spellUrl + data.spells[0].image.full,
                    qmaxrank : data.spells[0].maxrank,
                    qdescription : data.spells[0].description,
                    wicon : spellUrl + data.spells[1].image.full,
                    wmaxrank : data.spells[1].maxrank,
                    wdescription : data.spells[1].description,
                    eicon : spellUrl + data.spells[2].image.full,
                    emaxrank : data.spells[2].maxrank,
                    edescription : data.spells[2].description,
                    ricon : spellUrl + data.spells[3].image.full,
                    rmaxrank : data.spells[3].maxrank,
                    rdescription : data.spells[3].description
                }

            response.send(championData);
        });

        // Redirect invalid champIDs to the homepage
    } else {
        response.redirect('/');
    }
});

app.get('/calculate', express.json(), (request, response) => {
    let champSkills = championSkillData[`${request.body.player.id}`];
    var championDamage = calculate.getDamage(champSkills, request.body);
    response.send(championDamage);
})

app.post('/github', express.json(), (request, response) => {
    if(verifySecret(JSON.stringify(request.body), request.headers)){
        response.status(200).send('Successful push request.');

        
    } else {
        response.sendStatus(401);
    }
});

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