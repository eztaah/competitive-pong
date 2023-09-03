# Publish on Render

This guide outlines the steps for deploying the database and server on render.

<br>


## Database Deployment

1. Initialize a new PostgreSQL database on render.

2. Set up the environment variables on the Render website. Use the following key-value pairs:
    ```env
    DB_USER=database_user
    DB_HOST=dpg-heududb673hdgf5-a.frankfurt-postgres.render.com
    DB_NAME=database_name
    DB_PASS=password
    DB_PORT=5432
    ```

3. Click the "Connect" button at the top-right corner of the Render database page. On the "External Connection" page, copy the PSQL Command displayed.
    > It should look similar to:  
    ```bash
    PGPASSWORD=root psql -h dpg-cjq26heudu8kra6g-a.frankfurt-postgres.render.com -U database_user database_name
    ```

4. Open a PowerShell terminal and connect to the Render database using the above command, but reformatted as follows:
    ```bash
    psql "host=dpg-cjq26heudu8kra6g-a.frankfurt-postgres.render.com user=database_user dbname=database_name password=root"
    ```

5. Inside the PostgreSQl terminal, execute the SQL command to create the table.
    ```sql
    CREATE TABLE data (id VARCHAR(255), name VARCHAR(255), score INT, language VARCHAR(255));
    ```

6. Quit the PostgreSQL terminal.
    ```bash
    \q
    ```

<br>
<br>



## Server Deployment

Create a new web service on Render with the following settings:  
```plaintext
Root Directory: ./
Build Command: npm install
Start Command: node src/server.js
```