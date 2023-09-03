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
        console.log("> New connection")
        //get the database
        await getDatabase();

        //#region //////////////////////////// EVENTS ///////////////////////////

        /******* test-id *******/
        socket.on('test-id', async (uid) => {
        console.log("> receive from client : test-id")

            let createNewData = true
            for(let i=0 ; i<sqlDatabase.length ; i++) {
                if(sqlDatabase[i].id == uid) {
                    createNewData = false;
                    socket.emit('transfer-index', i)
                    console.log("> sent : transfer-index")

                };
            };
            if(createNewData) {
                await pool.query(`INSERT into data VALUES('${uid}', 'me', 0, 'english')`);
                socket.emit('transfer-index', sqlDatabase.length);
                console.log("> sent : transfer-index")

            };
            await getDatabase();
        });

        /******* require-data *******/
        socket.on('require-data', async () => {
            console.log("> receive from client : require-data")
            await getDatabase()
            socket.emit('send-data', sqlDatabase);
            console.log("> sent : send-data")
        });

        /******* set-new-highscore *******/
        socket.on('set-new-highscore', async array => {
            console.log("> receive from client : set-new-highscore")
            const score = array[0];
            const uid = array[1];
            await pool.query(`UPDATE data SET score = ${score} WHERE id = '${uid}'`);
        });

        socket.on('set-new-language', async array => {
            console.log("> receive from client : set-new-language")
            const language = array[0];
            const uid = array[1];
            await pool.query(`UPDATE data SET language = '${language}' WHERE id = '${uid}'`);
        });

        /******* set-new-name *******/
        socket.on('set-new-name', async array => {
            console.log("> receive from client : set-new-name")
            const name = array[0];
            const uid = array[1];
            await pool.query(`UPDATE data SET name = '${name}' WHERE id = '${uid}'`);
        });

        socket.on('load-leaderboard', async () => {
            console.log("> receive from client : load-leaderboard")
            socket.emit('transfer-database', sqlDatabase)
            console.log("> sent : transfer-database")
        });

        //#endregion //////////////////////////////////////////////////////////////////

    })();
});