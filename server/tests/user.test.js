import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';
import app from '../../index';

chai.config.includeStack = true;

/**
 * root level hooks
 */

describe('## Photos API', () => {
      
  describe('# GET /api/photos', () => {
    it('should get all photos', (done) => {
      request(app)
        .get('/api/photos')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('array');
          done();
        })
        .catch(done);
    });

  });
});
