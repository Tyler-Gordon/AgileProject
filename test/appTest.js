// Import the dependencies for testing
let chai = require('chai')
let chaiHttp = require('chai-http')
//let app = require('../server')
// Configure chai
chai.use(chaiHttp);
chai.should();

    describe("GET /", () => {
        // Test to get all students record
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

         it("should get all items", (done) => {
            chai.request('http://localhost:3000')
                .get('/items')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(320);
                    done()
            });
         });

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