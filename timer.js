var net = require('net');
//var formater = require('strftime')


var server = net.createServer(function listener(socket) {
  var date = new Date();
  //console.log(date.getHours(), date.toISOString())
  var isoString = date.toISOString()
  var now = isoString.slice(0, 10) + " " + (2 + +isoString.slice(11,13)) + isoString.slice(13,16)
  //socket.write(formater("%Y-%m-%d %H:%m", date).toString)
  socket.write(now)
  socket.end("\n");
})
server.listen(process.argv[2]);


//Officiel
/* var net = require('net')

    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      var d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }

    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

    server.listen(Number(process.argv[2])) */