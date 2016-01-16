var http = require('http');
var chai = require('chai');
var chupaCabra = require('../src/chupa-cabra.js');

var assert = chai.assert;

describe('Loop structure', function() {
    it('should return 0 to 5 by 1', function () {
      assert.deepEqual(chupaCabra.doLoop(0,5,1), [0,1,2,3,4,5]);
  });

    it('should return 0 to 10 by 2', function () {
      assert.deepEqual(chupaCabra.doLoop(0,10,2), [0,2,4,6,8,10]);
  });

    it('should return 0 to 11 by 4', function () {
      assert.deepEqual(chupaCabra.doLoop(0,11,4), [0,4,8]);
  });   

  it('should return 100 to 400 by 50', function () {
      assert.deepEqual(chupaCabra.doLoop(100,400,50), [100,150,200,250,300,350,400]);
  });        
});

describe('Validate URL', function(){
  it('should be valid URL using http', function(){
    assert.equal('', 'http://www.google.com')
  });

  it('should be valid URL using https', function(){
    assert.equal('', 'https://www.google.com')
  });

  it('should be valid URL without preffix', function(){
    assert.equal('', 'www.google.com')
  });
})