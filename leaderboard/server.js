const express = require('express');
const path = require('path');
const http = require('http');
const PORT = process.env.PORT || 2020;
const socketio = require('socket.io');
const { stringify } = require('querystring');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const mysql = require('mysql');
const { Socket } = require('engine.io');
app.use(express.static(path.join(__dirname, "public")));
server.listen(PORT);
const db = mysql.createPool({
    host     : 'eu-cdbr-west-03.cleardb.net',
    user     : 'b6b932665d6fcc',
    password : '240a3998',
    database : 'heroku_8744e5de78a1608'
});



io.on('connection', socket => {

    /******* get the database *******/
    let sqlDatabase;
    let query = db.query('SELECT * FROM data ORDER BY - score;', (err, results) => {
        if(err) throw err;
        sqlDatabase = results;
        socket.emit('transfer-database', sqlDatabase)
    });
});