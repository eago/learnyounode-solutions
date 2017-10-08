var bl = require('bl');
var http = require('http');

http.get(process.argv[2], function(res) {
  res.pipe(bl(function (err,data) {
    if(err) {
      return console.log("there is an error: " + err)
    }
    var dataStr = data.toString();
    console.log(dataStr.length);
    console.log(dataStr);
  }))
})

//OFFICEL
/* var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
}) */