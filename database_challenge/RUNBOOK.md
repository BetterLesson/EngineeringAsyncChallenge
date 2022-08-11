The db_init.sql file contains the DDL for the relational data.  I went ahead and created this for a PSQL db. This file can be ran on a PSQL db.

I set up a simple docker instance with
` docker pull postgres
`
`
docker run 
    --name myPostgresDb
    -p 5455:5432
    -e POSTGRES_USER=postgresUser
    -e POSTGRES_PASSWORD=postgresPW
    -e POSTGRES_DB=postgresDB
    -d
    postgres
`

Then accessed the DB through a DataGrip instance.

The migrate.py file is written in Python 3 and can be ran by `python migrate.py --file data.json`
The -h flag will output help information for the file.

The migrate.py file will output bulk inserts print commands.  Since there are foreign keys in various tables, I used a `returning id` command and mocked the retun of uuids from the 'inserted; rows.