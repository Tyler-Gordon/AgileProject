// Import the dependencies for testing
let chai = require('chai')
let chaiHttp = require('chai-http')
var assert = require('assert');
let FunctionsToTest = require('../public/js/FunctionsToTest')
let Calculate = require('../private/calculate')
let championSkillData = require('../private/championSkillData.json')
let app = require('../server')
// Configure chai
chai.use(chaiHttp);
chai.should();
    describe('Function Testing', function() {
        describe('ShowChampionContainer', function() {
            it('Should return Shown', function(done) {
                assert.equal('Shown',FunctionsToTest.ShowChampionContainer());
                done()
            });
        });
        
        describe('HideChampionContainer', function() {
            it('Should return Hidden', function(done) {
                assert.equal('Hidden',FunctionsToTest.HideChampionContainer());
                done()
            });
        });

        describe('GetDamage', function(done) {
            totalDamage = {
                aaDamage : [100],
                qDamage : [100],
                wDamage : [100],
                eDamage : [100],
                rDamage : [100]
            }
            it('getAbilityDamage', function(done) {
                assert.equal(174.375, Calculate.getAbilityDamage(championSkillData['Aatrox'].q[0],10,10,2));
                done();
            });
            it('getResistanceSubtracted', function(done) {
                assert.equal(20, Calculate.getResistanceSubtracted(0.1,10,100));
                done();
            });
            it('getDamageReducer', function(done) {
                assert.equal(0, Calculate.getDamageReducer(10,10));
                done();
            });
            it('getReducedDamage', function(done) {
                assert.equal(9.09090909090909, Calculate.getReducedDamage(10,10));
                done();
            });

            it('getDamage', async function(done) {
                data = {"player":{"hp":580,"hpperlevel":80,"mptype":"Blood Well","mp":0,"mpperlevel":0,"movespeed":345,"armor":33,"armorperlevel":3.25,"spellblock":32.1,"spellblockperlevel":1.25,"attackrange":175,"hpregen":3,"hpregenperlevel":0.75,"mpregenperlevel":0,"attackdamage":60,"attackdamageperlevel":5,"spelldamage":0,"attackspeed":0.651,"attackspeedperlevel":2.5,"flatarmorpenetration":0,"percentarmorpenetration":0,"flatspellpenetration":0,"percentspellpenetration":0,"critchance":0,"passiveicon":"https://ddragon.leagueoflegends.com/cdn/9.9.1/img/passive/Aatrox_Passive.png","qicon":"https://ddragon.leagueoflegends.com/cdn/9.9.1/img/spell/AatroxQ.png","qmaxrank":5,"qdescription":"Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.","wicon":"https://ddragon.leagueoflegends.com/cdn/9.9.1/img/spell/AatroxW.png","wmaxrank":5,"wdescription":"Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.","eicon":"https://ddragon.leagueoflegends.com/cdn/9.9.1/img/spell/AatroxE.png","emaxrank":5,"edescription":"Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.","ricon":"https://ddragon.leagueoflegends.com/cdn/9.9.1/img/spell/AatroxR.png","rmaxrank":3,"rdescription":"Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and movement speed. If he gets a takedown, this effect is extended, and he revives upon taking lethal damage."},
                        "enemy":{"hp":526,"hpperlevel":92,"mptype":"Mana","mp":418,"mpperlevel":25,"movespeed":330,"armor":20.88,"armorperlevel":3.5,"spellblock":30,"spellblockperlevel":0.5,"attackrange":550,"hpregen":6.5,"hpregenperlevel":0.6,"mpregenperlevel":0.8,"attackdamage":53.04,"attackdamageperlevel":3,"spelldamage":0,"attackspeed":0.668,"attackspeedperlevel":2,"flatarmorpenetration":0,"percentarmorpenetration":0,"flatspellpenetration":0,"percentspellpenetration":0,"critchance":0,"passiveicon":"https://ddragon.leagueoflegends.com/cdn/9.9.1/img/passive/Ahri_SoulEater2.png","qicon":"https://ddragon.leagueoflegends.com/cdn/9.9.1/img/spell/AhriOrbofDeception.png","qmaxrank":5,"qdescription":"Ahri sends out and pulls back her orb, dealing magic damage on the way out and true damage on the way back. After earning several spell hits, Ahri's next orb hits will restore her health.","wicon":"https://ddragon.leagueoflegends.com/cdn/9.9.1/img/spell/AhriFoxFire.png","wmaxrank":5,"wdescription":"Ahri releases three fox-fires, that lock onto and attack nearby enemies.","eicon":"https://ddragon.leagueoflegends.com/cdn/9.9.1/img/spell/AhriSeduce.png","emaxrank":5,"edescription":"Ahri blows a kiss that damages and charms an enemy it encounters, causing them to walk harmlessly towards her and take more damage from her abilities.","ricon":"https://ddragon.leagueoflegends.com/cdn/9.9.1/img/spell/AhriTumble.png","rmaxrank":3,"rdescription":"Ahri dashes forward and fires essence bolts, damaging nearby enemies. Spirit Rush can be cast up to three times before going on cooldown."}}
                assert.equal(49.63600264725348, Calculate.getDamage(championSkillData['Aatrox'],data).aa[0].damage);
                done();
            });
        });
      });