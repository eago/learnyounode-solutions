var fs = require('fs');

fileBuffer = fs.readFile(process.argv[2], function countingStar(err,res){
  try {
    var fileString=res.toString();
    var lineNumber=fileString.split('\n').length-1;
    console.log(lineNumber);
  } catch (err) {   
    console.error(err) 
  }

});

//Officiel
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})