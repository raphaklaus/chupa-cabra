var http = require('http');
var chai = require('chai');
var chupaCabra = require('../src/chupa-cabra.js');

var assert = chai.assert;

describe('Loop structure', function() {
    it('should return 0 to 5 by 1', function () {
      assert.deepEqual(chupaCabra.generateLoop(0,5,1), [0,1,2,3,4,5]);
  });

    it('should return 0 to 10 by 2', function () {
      assert.deepEqual(chupaCabra.generateLoop(0,10,2), [0,2,4,6,8,10]);
  });

    it('should return 0 to 11 by 4', function () {
      assert.deepEqual(chupaCabra.generateLoop(0,11,4), [0,4,8]);
  });   

  it('should return 100 to 400 by 50', function () {
      assert.deepEqual(chupaCabra.generateLoop(100,400,50), [100,150,200,250,300,350,400]);
  });        
});

describe('Validate URL', function(){
  it('should be valid URL using http', function(){
    assert.equal(chupaCabra.validateURL('http://www.google.com'), true)
  });

  it('should be valid URL without preffix', function(){
    assert.equal(chupaCabra.validateURL('www.google.com'), true)
  });

  it('should NOT be valid URL using http', function(){
    assert.equal(chupaCabra.validateURL('http://com'), false)
  });

  it('should NOT be valid URL without preffix', function(){
    assert.equal(chupaCabra.validateURL('www'), false)
  });    

  it('should be valid URL using a long url', function(){
    assert.equal(chupaCabra.validateURL('http://www.longurlmaker.com/go?id=EXLVPCEEVMCJMZAHPCWLLUKQSDBNNSRSQDOGFTLAFNJRMJZCMVNYQXOIAQWOJOHZRVFXOQYTEHLRRKTEFGDVDSEEIBTRPARGVWDJNBDSJOJBYDGEJKANCFSKGLCVMTCHQFREHUWRIFTHIAMSKNGMSYXZKZUWTWEKCVOKPKCYPVGYWTRGHXTZWRYGRTCKPHUSCICSSFRIAYHXRYEYVXYROXYGQBQGILYKUBDMGUVHSCEKAJIWGHOVENBUOSBXDAHXBLKIFGQYIVIJERFLYUGCHIXVBZSFZACBMNJRTZPBUYLYPQKNLQQSZOOANHFMIINUWXLPWBRRACQPTADFRUXRIMSVTYIBHWWDTISQKKIKNZAHZDMRYJJGWBCPZKRHHNKAVDRFOZPBYQIYTUQREZYABAQBLHISVSTRWLWKKMLJCUIWOYOTYMUZNKAZSISOBMFXXCHIOTRRNANCYCVWPQWCBWCUFUIGHODEQLMFEEWSEKUDMQABGWEITHCYBLEIZINQTZVYERQJCLNPBNRIKVQDCTCEEGNEPAUIAPHFHXOJIBZKPQSAMJDOCGTHMGLCHGKIVRNDPCNYDMITCBTOKXDNDWVQDGSLMDTIVHLKJYJNLRGNSZBDWFRACMQFTIRFLKOHSARBZAOKSUXLUZOQEFQGRHMKPEQBOFIHFAIEBWOURMFLLUBQASXRZKCPOTRDZAKEBSJDPXXGKCRVXTMXMKPLUSBJLSNLSXPUQZXFXUMHXDDUXPRJAGVVYWEKORVHPLBFKYLHTXPQBSLZICIIJDDIZISOZOWOAYULXFSQDIHFASEIVMQEQUMQCFFCTBRTZLEXRXNVGVAGOFOJSFOIABYCGEFAFWUFHZCZXQUDMVJAAYJSEYBFZAIFENGJJAPRASQXILBVHKVIJFAODBTCCBIGOOPYPFPPXGNGSOBZZXHJCIXFKRHMTPSIEIGTOWJLDWSVKUVJRDSTMQYWHFJBVCJZKPTZMCKPYDKIXGSOJLIVBGSJMCKHEUHPKAOWDZLBCWKZCDOMOWIQDAAPDLXHFFWPGKMJJXLMTVMWZAIOXQEARFQURNCWSZMYJYITWTGPPSMOTUCQLHRDMHYDUAANZNMJLUDHNJXCCKQVETLQADTNKSQFTRSTEECPYGXMQVPSFFNKZZAZCUMNNDSGULZYPCOOILAZHPRMVFXUFYUITGVGJOMDZMCOOQDXCEWJUOWPUTKZRFIKLDRVSDZRQBGERJCTOZDIOZYISJHKOPVATMVMQVDGWKLOUOIINLQBLPJEYROMHKNBWINNDRTABFPVTXEHJUIVKSZIKOVSYITVRHIVYCVAILVBJAITVROFJOOUCKMBTGXKNGGMICMRNISWIBPDTEJDSXXVHJXAPVLDBSPKUCBHKUETVUXOZGRRDPNLYLMOGYSHQHRKKTSUNXOJRLXQRPIVEWGDHTSNRKVHRNSBGKWTILDZXBQOQZKVVRYCKRPCBLJTYCVENSYVDBVACLPTKZPFROIBFYEGJNZHQUMDMKYQMTQPFFIQFYWWMEYRDCYMQXUGSGJFQIVDCLSHRBXWZUTMYRDBTCOKZIQSPAXGISJLDCSVDQRDKKPJCTLWVZGVIWNXXKDGCNRGPJBSATWLELUGEGCAGIVOFJMCTQIWDZDSJFLKYHVCSQIXWLYCTTRYCEBWUKTXKWQUBBEAIACBQLYNWWQPQIOTMQQGAJELFUFHWKHEKKFBVEORBFHRNWLZNBGOKLZQGFYCPGGAQMCMQQESWLKJIVIVXPJHAIYGOXIDDPEUCGGTXKLTWVCERLZOAJWBRVIFSRJWGNQJUWCRHOKDKNIBYIPZRMBJHJPZAYVHMMQGJTYQHIURVCSULITCUVLBEBBEAXLMJBTSURJCAETWHMQSVKVPFGRJISOIQZUZBOSWGCYHGSDOEUGZECPKJGURZIZPIUPJIIGPLEWSXAGCUNCZPRJYYDPYMOOUIDDRMKHXOEPMEVOZJQYYHHWGLMEXBSSKWWBIGJFVNUHSQVRZLQYTYVZJHDHIWZSSWUACEGXSBEKRZCRKSPEQKDASG'), true)
  });    

  it('should be valid URL using a long url with query string', function(){
    assert.equal(chupaCabra.validateURL('https://www.google.com/search?q=testing+frameworks+javascript&oq=testing+frameworks+javascript&aqs=chrome..69i57j0l5.3578j0j4&sourceid=chrome&es_sm=93&ie=UTF-8'), true)
  });
});

describe('Check protocol', function(){
  it('should be http', function(){
    assert.equal(chupaCabra.isHttp('http://www.google.com'), true);
  });

  it('should be https', function(){
    assert.equal(chupaCabra.isHttps('https://www.google.com'), true);
  });   

  it('should be http by default', function(){
    assert.equal(chupaCabra.forceHttp('www.google.com'), 'http://www.google.com');
  });    
});

describe('Find expression of loop', function(){
  it('should find expression', function(){
    assert.equal(chupaCabra.expressionExists('http://www.google.com/page=[0,20,3]'), true)
  });

  it('should NOT find expression', function(){
    assert.equal(chupaCabra.expressionExists('http://www.google.com/page=0'), false)
  });    
})