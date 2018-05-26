const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const { app, database } = require('../server');

chai.use(chaiHttp);

describe.skip('client routes', () => {
  it('should return the homepage', (done) => {
    chai.request(app)
      .get('/')
      .then(response => {
        response.should.have.status(200);
        response.should.be.html;
        done()
      })
  });

  it('should return a 404 for a route that doesnt exist', (done) => {
    chai.request(app)
      .get('/sadpath')
      .then(response => {
        response.should.have.status(404);
        done()
      })
  })
})

describe('API Routes', () => {
  beforeEach(done => {
  database.migrate.rollback().then(() => {
      database.migrate.latest().then(() => {
        return database.seed.run().then(() => {
          done();
        });
      });
    });
  });

  it.skip('should GET all the cards', (done) => {
    chai.request(app)
      .get('/api/v1/cards')
      .end((error, response) => {
        response.should.be.json
        response.should.have.status(200)
        response.body.should.be.an('array')
        response.body.length.should.equal(174)
        response.body[0].should.have.property('id', 1);
        response.body[0].should.have.property('class', 'Brute');
        response.body[0].should.have.property('name');
        response.body[0].should.have.property('initiative');
        response.body[0].should.have.property('top_action');
        response.body[0].should.have.property('bottom_action');
        response.body[0].should.have.property('image_url');
        response.body[0].should.have.property('card_level', 1);
        done()
      })
  })

  describe("GET cards by :class", () => {
    it("should GET all cards of a specified class", (done) => {
      chai.request(app)
        .get('/api/v1/cards/Mindthief')
        .end((error, response) => {
          response.should.be.json
          response.should.have.status(200);
          response.body.should.be.an('array');
          response.body.length.should.equal(29);
          // response.body[0].should.have.property('id', 66);
          response.body[0].should.have.property('class', 'Mindthief');
          response.body[0].should.have.property('name');
          response.body[0].should.have.property('initiative');
          response.body[0].should.have.property('top_action');
          response.body[0].should.have.property('bottom_action');
          response.body[0].should.have.property('image_url');
          response.body[0].should.have.property('card_level', 1);
          done();
        })
    });
  });

});
