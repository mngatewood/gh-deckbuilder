const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const { app, database } = require('../server');

chai.use(chaiHttp);

describe('client routes', () => {
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

  beforeEach(() => {
    return database.seed.run()
  })

  it('should GET all the cards', (done) => {
    chai.request(app)
      .get('/api/v1/cards')
      .end((error, response) => {
        response.should.be.json
        response.should.have.status(200)
        response.body.should.be.an('array')
        response.body.length.should.equal(174)
        response.body[0].should.have.property('name');
        response.body[0].should.have.property('id', 1);
        response.body[0].should.have.property('url');
        response.body[0].should.have.property('image');
        done()
      })
  })

});

