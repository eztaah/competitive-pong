//#region //////////////////////////// INITIALIZATION ///////////////////////////

// -------------- Module Imports -------------- //
const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const {Pool} = require("pg");
require('dotenv').config({ path: './src/.env' });


// -------------- Constants and Environment Variables -------------- //
let sqlDatabase;
const PORT = process.env.PORT || 4000;


// -------------- Express and Socket.io Configuration -------------- //
const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(express.static(path.join(__dirname, "./public")));


// -------------- Database Configuration -------------- //
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    ssl : true
});


// -------------- Server Startup -------------- //
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


//#endregion //////////////////////////////////////////////////////////////////






// -------------- Functions -------------- //
const getDatabase = async () => {
    try {
      const results = await pool.query('SELECT * FROM data ORDER BY - score;');
      sqlDatabase = results.rows;
    } catch (err) {
      console.error(err);
    }
};





io.on('connection', socket => {
    (async () => {
        console.log("> A new client has logged in")
        //get the database
        await getDatabase();
        socket.emit('server-ready');
        console.log('> "server-ready" packet sent'); 

        //#region //////////////////////////// EVENTS ///////////////////////////

        /******* test-id *******/
        socket.on('test-id', async (uid) => {
        console.log('> "test-id" packet received from client');

        let createNewData = true
        for(let i=0 ; i<sqlDatabase.length ; i++) {
            if(sqlDatabase[i].id == uid) {
                createNewData = false;
                socket.emit('transfer-index', i)
                console.log('> "transfer-index" packet sent'); 
            };
        };
        if(createNewData) {
            await pool.query(`INSERT into data VALUES('${uid}', 'me', 0, 'english')`);
            socket.emit('transfer-index', sqlDatabase.length);
            console.log('> "transfer-index" packet sent'); 
        };
        await getDatabase();
        });

        /******* require-data *******/
        socket.on('require-data', async () => {
            console.log('> "require-data" packet received from client');
            await getDatabase()
            socket.emit('send-data', sqlDatabase);
            console.log('> "send-data" packet sent'); 
        });

        /******* set-new-highscore *******/
        socket.on('set-new-highscore', async array => {
            console.log('> "set-new-highscore" packet received from client');
            const score = array[0];
            const uid = array[1];
            await pool.query(`UPDATE data SET score = ${score} WHERE id = '${uid}'`);
        });

        socket.on('set-new-language', async array => {
            console.log('> "set-new-language" packet received from client');

            const language = array[0];
            const uid = array[1];
            await pool.query(`UPDATE data SET language = '${language}' WHERE id = '${uid}'`);
        });

        /******* set-new-name *******/
        socket.on('set-new-name', async array => {
            console.log('> "set-new-name" packet received from client');

            const name = array[0];
            const uid = array[1];
            await pool.query(`UPDATE data SET name = '${name}' WHERE id = '${uid}'`);
        });

        socket.on('load-leaderboard', async () => {
            console.log('> "load-leaderboard" packet received from client');
            socket.emit('transfer-database', sqlDatabase)
            console.log('> "transfer-database" packet sent'); 
        });

        //#endregion //////////////////////////////////////////////////////////////////

    })();
});