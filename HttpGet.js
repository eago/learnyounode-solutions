http = require('http');

http.get(process.argv[2], function (res, err) {
  if (err) {
    return console.err("There is an err: " + err);
  } else {
    res.setEncoding('utf8').on('data', function(res) {
      console.log(res)
    })
  }
})

//OFFICIEL
/* var http = require('http')

    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error) */