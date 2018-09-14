import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';
import app from '../../index';

chai.config.includeStack = true;

describe('## Misc', () => {
  describe('# GET /api/healthcheck', () => {
    it('should return OK', (done) => {
      request(app)
        .get('/api/healthcheck')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.text).to.equal('OK');
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/404', () => {
    it('should return 404 status', (done) => {
      request(app)
        .get('/api/404')
        .expect(httpStatus.NOT_FOUND)
        .then((res) => {
          expect(res.body.message).to.equal('Not Found');
          done();
        })
        .catch(done);
    });
  });


  it('should handle express validation error', (done) => {
    request(app)
      .post('/api/bad')
      .send({
        dummy: '1234567890'
      })
      .expect(httpStatus.BAD_REQUEST)
      .then((res) => {
        expect(res.body.message).to.equal('bad request');
        done();
      })
      .catch(done);
  });
});
