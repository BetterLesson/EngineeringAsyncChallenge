import json

#Create the DB
print('CREATE DATABASE migration')


## Then create 3 tables:
print('create table orders (UUID VARCHAR(64) NOT NULL UNIQUE, customerName VARCHAR(64), cellPhone VARCHAR(24), email VARCHAR(64), address VARCHAR(128), orderTotal VARCHAR(28), orderDate VARCHAR(28), discountCode VARCHAR(28), PRIMARY KEY (UUID));')
print('create table bookSet (bookSetID int NOT NULL UNIQUE, email VARCHAR(64), UUID VARCHAR(64), PRIMARY KEY (bookSetID));')
print('create table coachingService (coachingServiceID int NOT NULL UNIQUE, email VARCHAR(64), UUID VARCHAR(64), PRIMARY KEY (coachingServiceID));')


# And finally insert all data into the table
f = open('../data.json')
data = json.load(f)

for document in data:
    # print(document)
    print(f"INSERT INTO orders (UUID, customerName, cellPhone, email, address, orderTotal, orderDate, discountCode) VALUES \n ('{document['UUID']}', '{document['customerName']}', '{document['cellPhone']}', '{document['email']}', '{document['address']}', '{document['orderTotal']}', , '{document['orderDate']}', '{document['discountCode']}'); \n\n")
    for bookSet in document['bookSetID']:
        print(f"INSERT INTO bookSet (bookSetID, email, UUID) VALUES \n ('{bookSet}', '{document['email']}', '{document['UUID']}')")
    print('\n')
    if 'coachingServiceID' in document:
        for coachingService in document['coachingServiceID']:
            print(f"INSERT INTO coachingService (coachingServiceID, email, UUID) VALUES \n ('{bookSet}', '{document['email']}', '{document['UUID']}')")