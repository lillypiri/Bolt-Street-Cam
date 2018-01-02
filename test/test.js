const assert = require('assert');
const expect = require('chai').expect;
const request = require('supertest');
const server = require('../server');
const database = require('../server/database');

describe('api', function() {
  beforeEach(async () => {
    await database('marks').truncate();
    await database('marks').insert({ mark_id: '123' })
  });

  describe('/mark_id', function() {
    it('should return mark information when given a mark_id', function(done) {
      request(server)
       .get('/marks/123')
       .set('Accept', 'application/json')
       .expect('Content-Type', /json/)
       .expect(200)
       .end(function(err, resp) {
         if (err) return done(err);
         expect(resp.body.mark_id).to.eq('123');
         done();
       });
    });
  });
});
