const request = require('request');
const chai = require('chai');
const expect = chai.expect;

const apiUrl = 'http://localhost:3000/api/cat';

describe('Cat API Test Suite', function () {
  it('should retrieve a cat object using GET', function (done) {
    request(apiUrl, function (error, response, body) {

      const catObject = JSON.parse(body);
      console.log('GET Response:', catObject);

      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should add a new cat object using POST', function (done) {
    const newCat = {
      name: 'newmeow',
      sound: 'purr'
    };

    const options = {
      uri: apiUrl,
      method: 'POST',
      json: newCat
    };

    request(options, function (error, response, body) {

      console.log('POST Response:', body);

      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should delete a cat object using DELETE', function (done) {
    const existingCatId = '64de04b1e04494e62b08ad54';

    const options = {
      uri: `${apiUrl}/${existingCatId}`,
      method: 'DELETE'
    };

    request(options, function (error, response, body) {

      const deleteResult = JSON.parse(body);
      console.log('DELETE Response:', deleteResult);

      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});

