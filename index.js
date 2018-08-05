var https = require('https')
var firebaseHost = "catfeeder-bot.firebaseio.com";
var userUid = ''
function getData(){
  return new Promise((resolve, reject) => {
    var options = {
      hostname: firebaseHost,
      port: 443,
      path: "/login" + ".json",
      method: 'GET'
    };
    var req = https.request(options, function (res) {
      res.setEncoding('utf8');
      var body = '';
      res.on('data', function(chunk) {
        body += chunk;
      });
      res.on('end', function() {
        resolve(JSON.parse(body))
        userUid = JSON.parse(body)
      });
    });
    req.end();
    req.on('error', reject);
  });
}

function putData (key) {
  var options = {
    hostname: firebaseHost,
    port: 443,
    path: "/feeders/" + key + "/isCatDeepLens.json",
    method: 'PUT'
  }

  var req = https.request(options, function(res){
    res.setEncoding('utf8')
    var body = ''
    res.on('data', function(chunk) {
      body += chunk
    })
    res.on('end', function () {
      console.log(body)
    })
  })
  req.end(JSON.stringify(true))
  return 'Firebase put succeded';
}

exports.handler = function (event, context, callback) {
  getData().then(() => {
    putData(userUid)
  }).catch(err => {
    console.log('You get some error ====>>>> ',err)
  })
  var testing = {
    getData,
    putData
  }
  callback(null, testing )
};

