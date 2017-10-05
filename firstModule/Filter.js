var fs = require('fs');
var path = require('path');

module.exports = function (fold, ext, callback) {
  fs.readdir(fold,ext, function(err, files){
    if (err) {
      return callback(err);
    } else {
/*       files.forEach(function(file) {
        if (path.extname(file) === '.' + ext) {
          return callback(null, file);
        }
      }) */
      list = files.filter(function(file) {
        if(path.extname(file) === '.' + ext) return true;
      })
      return callback(null, list)
    }
  })
}

//offciel
/* var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
} */