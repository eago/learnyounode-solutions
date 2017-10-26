var fs = require('fs');
var path = require('path')

fs.readdir(process.argv[2], function fileFilter(err, res) {
  if (err) {
    return console.log(err);
  }
  var filtedList = [];

  //regex method
  var regexString = '.*\.' + process.argv[3]
  var regex = new RegExp(regexString)
  for (var i = 0; i < res.length; i++) {
    if (res[i].match(regex)) {
      filtedList.push(res[i]);
    }
  }

  //normal path method
  /*   type = '.'.concat(process.argv[3]);
    for(var i = 0; i < res.length; i++) {
      if (type == path.extname(res[i])) {
        filtedList.push(res[i]);
      }
    } */

    
  for (var i = 0; i < filtedList.length; i++) {
    console.log(filtedList[i]);
  }

})

//Officiel
/* var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
}) */


