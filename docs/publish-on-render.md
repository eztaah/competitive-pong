# PUBLISH ON RENDER


## DATABASE

1. Create new PostgreSQl database on Render.  

2. Setup enviromnemt varaibles on the website with this key values :
```
DB_USER=database_user
DB_HOST=dpg-heududb673hdgf5-a.frankfurt-postgres.render.com
DB_NAME=database_name
DB_PASS=password
DB_PORT=5432
```

3. Hit the connect button on the top right of the Render database page, and in the External connection page, copy the PSQL Command.
It will be something like that :  
``` PGPASSWORD=root psql -h dpg-cjq26heudu8kra6g-a.frankfurt-postgres.render.com -U database_user database_name ```

4. Open a PowerShell terminal and connect to the database with the previous link (but reformate it like so) : 
```
psql "host=dpg-cjq26heudu8kra6g-a.frankfurt-postgres.render.com user=database_user dbname=database_name password=root"
```

5. Create the table :
```
CREATE TABLE data (id VARCHAR(255), name VARCHAR(255), score int, language VARCHAR(255));
```

6. Quit the programm
```
quit
```

<br>
<br>

## SERVER
- Create a new web service with the following settings
```
Root Directory : ./
Build Command : npm install
Start Command : node src/server.js
```
<br> 
<br>

