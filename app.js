var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(4000);
app.use(express.static(__dirname + '/static'));

// ROUTUNG ////////////////////////////////////////////////////////////////////////
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

// app.get('/client', function(req, res) {
//     res.sendfile(__dirname + '/client.html');
// });

// app.get('/server', function(req, res) {
//     res.sendfile(__dirname + '/server.html');
// });

// HANDSHAKING  ////////////////////////////////////////////////////////////////
// io.sockets.on('connection', function (socket) {
//         socket.on('messageToClient', function (data) {
//                  console.log(data);
//                  io.sockets.emit('messageForClient', data);
//         });
//         socket.on('messageToServer', function (data) {
//                 console.log(data);
//                 io.sockets.emit('messageForServer', data);
//         });
// });