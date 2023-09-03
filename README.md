*made during july 2022*

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

La base de donnée et le serveur sont host sur Render.  
Pour travailler sur le projet, il est convenable d'avoir une base de donnée et un serveur crtéé localement.  
Voici les instructions détaillé pour la creation d'une base de donné et du serveur sur votre machine.


## Create a local database on your computer 
1. Install [PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) on your computer.  
(Remember your password for step 10)

2. Add psql.exe to you evironnment variables.


3. Open a PowerShell terminal and connect to the postgres user : 
```
psql -U postgres
```

4. Create a local database :
```
CREATE DATABASE competitive-pong-db;
```

5. Create the table :
```
CREATE TABLE data (id VARCHAR(255), name VARCHAR(255), score int, language VARCHAR(255));
```

6. Put some test values : 
```
INSERT INTO data (id, name, score, language)
VALUES 
('-', 'ben', 20, 'english'),
('-', 'titouan', 1, 'french');
```

7. Leave the posgres program :
```
quit
```
8. Navigate to the project directory :

9. Create a .env file inside the src directory (from the .env.example file)
```
cd src
```
```
copy .env.example .env
```

10. Replace the values
```c++
DB_USER=postgres
DB_HOST=localhost
DB_NAME=competitive-pong-db
DB_PASS=password
DB_PORT=5432
```
<br>
<br>

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