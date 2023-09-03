# PUBLISH ON RENDER


## DATABASE

1. Create new PostgreSQl database on Render.  

2. Hit the connect button on the top right of the Render database page, and in the External connection page, copy the PSQL Command.
It will be something like that :  
``` PGPASSWORD=root psql -h dpg-cjq26heudu8kra6g-a.frankfurt-postgres.render.com -U database_user database_name ```

3. Open a PowerShell terminal and connect to the database with the previous link (but reformate it like so) : 
```
psql "host=dpg-cjq26heudu8kra6g-a.frankfurt-postgres.render.com user=database_user dbname=database_name password=root"
```

4. Create the table :
```
CREATE TABLE data (id VARCHAR(255), name VARCHAR(255), score int, language VARCHAR(255));
```

5. Update 


- On the server.js file, connect to the db like that :
``` c++
const pool = new Pool({
    user: 'database_user',
    host: 'dpg-cjq26heudu8kra6g-a.frankfurt-postgres.render.com',
    database: 'database_name',
    password: 'root',
    port: 5432,
    ssl : true
});
```



<br>
<br>
<br>
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

