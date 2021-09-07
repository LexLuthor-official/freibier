let shortener = require('./lib/shortener');

let s = new shortener.Shortener();

// goo.gl
(function () {
  let url = 'http://www.google.com';
  let key = 'KEY';
  s.google(url, key, function(result) {
    console.log('\nGoogle:');
    console.log('Long url:', result.longUrl);
    console.log('Shortened url:', result.shortUrl);
  });
})();

// bit.ly
(function() {
  let url = 'http://bit.ly';
  let key = 'KEY';
  let format = 'json';
  s.bitly(url, key, format, function(result) {
    console.log('\nBitly:');
    console.log('Long url:', result.longUrl);
    console.log('Short url:', result.shortUrl);
  });
})();

// readability
(function() {
  let url = 'https://www.readability.com/';
  s.readability(url, function(result) {
    console.log('\nReadability:');
    console.log('Long url:', result.longUrl);
    console.log('Short url:', result.shortUrl);
  });
})();

// mtny.mobi
(function() {
  let url = 'https://sites.google.com/site/mtnymobi2/';
  s.mtny(url, function(result) {
    console.log('\nMtny:');
    console.log('Long url:', result.longUrl);
    console.log('Short url:', result.shortUrl);
  });
})();

// adf.ly
(function() {
  let url = 'http://example.com/';
  let key = 'KEY';
  let uid = 'UID';
  s.adfly(url, key, uid, function(result) {
    console.log('\nAdf.ly:');
    console.log('Long url:', result.longUrl);
    console.log('Short url:', result.shortUrl);
  });
})();