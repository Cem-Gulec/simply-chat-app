var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

// Static files
app.use(express.static('public'));

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    socket.on('disconnect',function(data){
        console.log('disconnected');
    });

    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });


    socket.on('chat2', function(data){
        // console.log(data);
        io.sockets.emit('chat2', data);
    });


    socket.on('typing',function(data){
      socket.broadcast.emit('typing',data)
    });

});
