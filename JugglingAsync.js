var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(res1) {
  http.get(process.argv[3], function(res2) {
    http.get(process.argv[4], function(res3) {
      res1.pipe(bl( function (err, rs){
        console.log(rs.toString());
      }));
      res2.pipe(bl( function (err, rs){
        console.log(rs.toString());
      }));
      res3.pipe(bl( function (err, rs){
        console.log(rs.toString());
      }));
/*       res1.on('data', function(rs) {
        console.log(rs.toString())
      });
      res2.on('data', function(rs) {
        console.log(rs.toString())
      });
      res3.on('data', function(rs) {
        console.log(rs.toString())
      }); */
    })
  })
})

//OFFICIEL
/* var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
} */