<div align="center">

# Competitive Pong

*Developed in July 2022*

<br>

"A competitive pong game against an unbeatable bot. Aim to climb the multiplayer leaderboard by scoring as high as possible."  
Control the paddle using the `up-arrow` and `down-arrow` keys.

This game leverages JavaScript for game logic, Node.js and Express.js for server-side operations, Socket.io for real-time client-server communication, and PostgreSQL for database management.

<br>

![Gameplay](https://github.com/EzTaah/competitive-pong/blob/main/docs/gameplay.gif)
<br>
<br>

</div>

---

# Building and Development

The database and server for this project are hosted on [render](https://dashboard.render.com/). For local development, it's advisable to set up both a database and a server locally. Below are the detailed instructions for setting up a local database and server.

<br>

## Setting Up a Local Database

1. Download and install [PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads).
   > Remember your password; you'll need it later.

2. Add the path to `psql.exe` to your system's environment variables.

3. Open a PowerShell terminal and connect to the `postgres` user.
    ```bash
    psql -U postgres
    ```
    > It will open the PostgreSQl terminal.

4. Inside the PostgreSQL terminal, create a local database named `competitive-pong-db`.
    ```sql
    CREATE DATABASE competitive-pong-db;
    ```

5. Create a table to store the game data.
    ```sql
    CREATE TABLE data (id VARCHAR(255), name VARCHAR(255), score INT, language VARCHAR(255));
    ```

6. Insert some test records.
    ```sql
    INSERT INTO data (id, name, score, language) VALUES ('-', 'ben', 20, 'english'), ('-', 'titouan', 1, 'french');
    ```

7. Leave the PostgreSQL terminal.
    ```sql
    \q
    ```

8. Go to your project directory.

9. Navigate to the `src` directory, open a PowerShell terminal and create a `.env` file from `.env.example`.
    ```bash
    cd src
    copy .env.example .env
    ```

10. Replace the placeholders in the `.env` file with your actual credentials.
    ```env
    DB_USER=postgres
    DB_HOST=localhost
    DB_NAME=competitive-pong-db
    DB_PASS=your_password_here
    DB_PORT=5432
    ```

<br>


## Running the Local Server

1. Open a PowerShell terminal and navigate to the project directory.

2. Install all required Node.js dependencies by running:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open a web browser and navigate to:
    ```bash
    localhost:4000
    ```