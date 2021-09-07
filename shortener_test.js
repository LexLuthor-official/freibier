let shortener = require('../urlshortener/lib/shortener');

exports['urlshortener goo.gle'] = function (test) {
  let url = 'http://www.google.com';
  let key = process.env.GOOGLE;
  let s = new shortener.Shortener();
  s.google(url, key, function(result) {
    test.deepEqual(result
             , { 
               shortUrl: 'http://goo.gl/fbsS'
               , longUrl: 'http://www.google.com/' 
             }
             , "Deep equal for www.goo.gl");
    test.done();
  });
};

exports['urlshortener bit.ly'] = function (test) {
  let url = 'http://bit.ly';
  let key = process.env.BITLY;
  let format = 'json';
  let s = new shortener.Shortener();
  s.bitly(url, key, format, function(result) {
    test.deepEqual(result
             , {
               shortUrl: 'http://bit.ly/wq5Qeg'
               , longUrl: 'http://bit.ly/'
             }
             , "Deep equal for bit.ly");
    test.done();
  });
};

exports['urlshortener readability'] = function (test) {
  let url = 'https://www.readability.com/';
  let s = new shortener.Shortener();
  s.readability(url, function(result) {
    test.deepEqual(result
             , {
               shortUrl: 'http://rdd.me/-6tqmqpqj'
               , longUrl: 'https://www.readability.com/'
             }
             , "Deep equal for bit.ly");
    test.done();
  });
};

exports['urlshortener mtny'] = function (test) {
  let url = 'https://sites.google.com/site/mtnymobi2/';
  let s = new shortener.Shortener();
  s.mtny(url, function(result) {
    test.deepEqual(result
             , {
               shortUrl: 'http://mtny.mobi/69kW'
               , longUrl: 'https://sites.google.com/site/mtnymobi2/'
             }
             , "Deep equal for mtny.mobi");
    test.done();
  });
};

exports['urlshortener adf.ly'] = function (test) {
  let url = 'http://example.com/';
  let key = process.env.ADFLY;
  let uid = process.env.ADFLY_UID;
  let s = new shortener.Shortener();
  s.adfly(url, key, uid, function(result) {
    test.deepEqual(result
             , {
               shortUrl: 'http://adf.ly/1S0QLI'
               , longUrl: 'http://example.com/'
             }
             , "Deep equal for adf.ly");
    test.done();
  });
};