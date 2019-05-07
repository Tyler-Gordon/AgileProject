// Import the dependencies for testing
let chai = require('chai')
let chaiHttp = require('chai-http')
var assert = require('assert');
let FunctionsToTest = require('../public/js/FunctionsToTest')
let Calculate = require('../private/calculate')

//let app = require('../server')
// Configure chai
chai.use(chaiHttp);
chai.should();
    describe("GET End points", () => {
        describe('GET Champions', function() {
            it("should get all champions", (done) => {
                chai.request('http://localhost:3000')
                    .get('/champions')
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('array');
                        res.body.length.should.be.eql(143);
                        done()
                });
            });
        });
        describe('GET items', function() {
            it("should get all items", (done) => {
                chai.request('http://localhost:3000')
                    .get('/items')
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('array');
                        res.body.length.should.be.eql(319);
                        done()
                });
            });
        });

        describe('GET champion data', function() {
            it("should get champion data", (done) => {
                chai.request('http://localhost:3000')
                    .get('/choose')
                    .query({id: 'Aatrox'})
                    .end((err, res) => {
                        let data = JSON.parse(res.text)
                        res.should.have.status(200);
                        data.should.be.a('object');
                        done()
                });
            });
        });
        describe('GET Redirect', function() {
            it("should be redirected to /", (done) => {
            chai.request('http://localhost:3000')
                .get('/choose')
                .query({id: 'null'})
                .end((err, res) => {
                    res.should.redirectTo('http://localhost:3000/');
                    res.should.have.status(200);
                    done()
                });
            });
        });
    });

    describe('Function Testing', function() {
        describe('ShowChampionContainer', function() {
            it('Should return Shown', function() {
                assert.equal('Shown',FunctionsToTest.ShowChampionContainer());
            });
        });
        
        describe('HideChampionContainer', function() {
            it('Should return Hidden', function() {
                assert.equal('Hidden',FunctionsToTest.HideChampionContainer());
            });
        });

        describe('GetDamage', function() {
            totalDamage = {
                aDamage : [100],
                qDamage : [100],
                wDamage : [100],
                eDamage : [100],
                rDamage : [100]
            }
            it('Q Damage', function() {
                assert.equal(totalDamage.qDamage[0],Calculate.getDamage('Test','Test').qDamage[0]);
            });
            it('W Damage', function() {
                assert.equal(totalDamage.qDamage[0],Calculate.getDamage('Test','Test').wDamage[0]);
            });
            it('E Damage', function() {
                assert.equal(totalDamage.qDamage[0],Calculate.getDamage('Test','Test').eDamage[0]);
            });
            it('R Damage', function() {
                assert.equal(totalDamage.qDamage[0],Calculate.getDamage('Test','Test').rDamage[0]);
            });
            it('A Damage', function() {
                assert.equal(totalDamage.qDamage[0],Calculate.getDamage('Test','Test').aDamage[0]);
            });
        });
      });