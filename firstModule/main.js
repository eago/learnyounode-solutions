var filter = require('./Filter.js');

var folder = process.argv[2]
var ext = process.argv[3]


filter(process.argv[2],ext, function(err, data) {
  if (err) {
    console.log('There was an error');
  } else {
    data.forEach(function(element) {
      console.log(element);
    });
  }
});

//Officel
/* var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})
 */




