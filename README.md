<div align="center">

# competitive pong

<br>
<br>

"A competitive Pong game where your goal is to score as high as possible against an unbeatable bot."   
There is a multiplayer leaderboard to track high scores.  
Use `up-arraow`, `down-arrow` keys to move the paddle.

This game is developed using JavaScript for game mechanics, Node.js and Express.js for server-side logic, Socket.io for real-time communication, and PostgreSQL for data storage.

<br>
<br>
<br>

</div>

---


# Building and Development


## Run the server on your machine

1. Open a PowerShell terminal and navigate to the project's directory.

2. Run this command to install all the node dependeties (it will search through the package.json file) :
```
npm install
```
3. Run the server :
```
npm run dev
```
4. Open a Chrome page and type in the adresse bar : 
```
localhost:4000
```

<br>
<br>
<br>

## Setup the database on your computer 
1. Install [PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) on your computer.

2. Add psql.exe to you evironnment variables.


3. Open a PowerShell terminal and connect to the postgres user : 
```
psql -U postgres
```

4. Create a local database :
```
CREATE DATABASE mydatabase;
```

5. Create the table :
```
CREATE TABLE data (id VARCHAR(255), name VARCHAR(255), score int, language VARCHAR(255));
```

*Last modified : july 2022*