<div align="center">

# competitive pong

*Developed in July 2022*

<br>

"A competitive pong game against an unbeatable bot. Aim to climb the multiplayer leaderboard by scoring as high as possible."  
Control the paddle using the `up-arrow` and `down-arrow` keys.

<br>

This game leverages JavaScript for game logic, Node.js and Express.js for server-side operations, Socket.io for real-time client-server communication, and PostgreSQL for database management.

<br>

![Gameplay](./docs/github-assets/gameplay.gif)

<a href="https://competitive-pong.onrender.com/"> <img src="./docs/github-assets/play-button/play-button.png" height=43 hspace=1> </a>

<br>
<br>

</div>

---

# Building and Development

The database and server for this project are hosted on [render](https://dashboard.render.com/). For local development, it's advisable to set up both a database and a server locally. Below are the detailed instructions for setting up a local database and server.

<br>

## Setting Up a Local Database

1. **Download and install [PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads).**  
-> Remember your password; you'll need it later.

<br>

2. **Add the path to** `psql.exe` **to your system's environment variables.**

<br>

3. **Open a PowerShell terminal and connect to the** `postgres` **user.**
    ```bash
    psql -U postgres
    ```
    ->  It will open the PostgreSQl terminal.

<br>

4. **Inside the PostgreSQL terminal, create a local database named** `competitive-pong-db`**.**
    ```sql
    CREATE DATABASE competitive-pong-db;
    ```
    Here is the SQL syntax for the standard commands used in this project :  [SQL Syntax Guide](./docs/documentation/sql-syntax.md).   

<br>

5. **Create a table to store the game data.**
    ```sql
    CREATE TABLE data (id VARCHAR(255), name VARCHAR(255), score INT, language VARCHAR(255));
    ```

<br>


6. **Insert some test records.**
    ```sql
    INSERT INTO data (id, name, score, language) VALUES ('-', 'ben', 20, 'english'), ('-', 'titouan', 1, 'french');
    ```

<br>

7. **Leave the PostgreSQL terminal.**
    ```sql
    \q
    ```

<br>

8. **Go to your project directory.**

<br>

9. **Navigate to the**`src` **directory, open a PowerShell terminal and create a** `.env` **file from** `.env.example`**.**
    ```bash
    cd src
    copy .env.example .env
    ```

<br>

10. **Replace the placeholder password in the `.env` file with the postgres user password.**
    ```env
    DB_USER=postgres
    DB_HOST=localhost
    DB_NAME=competitive-pong-db
    DB_PASS=your_password_here
    DB_PORT=5432
    ```

<br>
<br>


## Running the Local Server

1. **Download and install [Nodejs](https://nodejs.org/en).** 

<br>

2. **Open a PowerShell terminal and navigate to the project directory.**

<br>

3. **Install all required Node.js dependencies by running:**
    ```bash
    npm install
    ```
    If the `package.json` file is missing, follow the instructions in [Nodejs Setup](./docs/documentation/nodejs-setup.md) to initialize your Node.js environment.

<br>

4. **Start the development server:**
    ```bash
    npm run dev
    ```

<br>

5. **Open a web browser and navigate to:**
    ```bash
    localhost:4000
    ```

<br>
<br>

-> To publish the server and database on Render, follow the guide: [Publish on Render](./docs/documentation/publish-on-render.md).