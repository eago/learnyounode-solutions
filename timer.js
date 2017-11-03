var net = require('net');

var server = net.createServer(function listener(socket) {
  var date = new Date();
  var isoString = date.toISOString()
  var now = isoString.slice(0, 10) + " " + (2 + +isoString.slice(11,13)) + isoString.slice(13,16)
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

    //question
/*     ## HINTS                                                                     
    
For this exercise we'll be creating a raw TCP server. There's no HTTP       
involved here so we need to use the net module from Node core which has     
all the basic networking functions.                                         
    
The net module has a method named net.createServer() that takes a           
function. The function that you need to pass to net.createServer() is a     
connection listener that is called more than once. Every connection         
received by your server triggers another call to the listener. The          
listener function has the signature:                                        
    
function listener(socket) { }                                  
    
net.createServer() also returns an instance of your server. You must call   
server.listen(portNumber) to start listening on a particular port.          
    
A typical Node TCP server looks like this:                                  
    
var net = require('net')                                                 
var server = net.createServer(function (socket) {                        
// socket handling logic                                               
})                                                                       
server.listen(8000)                                                      
    
Remember to use the port number supplied to you as the first command-line   
argument.                                                                   
    
The socket object contains a lot of meta-data regarding the connection,     
but it is also a Node duplex Stream, in that it can be both read from, and  
written to. For this exercise we only need to write data and then close     
the socket.                                                                 
    
Use socket.write(data) to write data to the socket and socket.end() to      
close the socket. Alternatively, the .end() method also takes a data        
object so you can simplify to just: socket.end(data).                       
    
Documentation on the net module can be found by pointing your browser       
here:                                                                       
    
file://C:\Users\shu\AppData\Roaming\npm\node_modules\learnyounode\node_api  
doc\net.html                                                                
    
To create the date, you'll need to create a custom format from a new        
Date() object. The methods that will be useful are:                         
    
date.getFullYear()                                                       
date.getMonth()     // starts at 0                                       
date.getDate()      // returns the day of month                          
date.getHours()                                                          
date.getMinutes()                                                        
    
Or, if you want to be adventurous, use the strftime package from npm. The   
strftime(fmt, date) function takes date formats just like the unix date     
command. You can read more about strftime at:                               
(https://github.com/samsonjs/strftime)     */                                  