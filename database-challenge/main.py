import json

#Create the DB
print('CREATE DATABASE migration')


## Then create 3 tables:
print('create table orders (UUID VARCHAR(255) NOT NULL, customerName VARCHAR(255), cellPhone VARCHAR(255), email VARCHAR(255), address VARCHAR(255), orderTotal VARCHAR(255), orderDate VARCHAR(255), discountCode VARCHAR(255), PRIMARY KEY (UUID));')
print('create table bookSet (bookSetID int NOT NULL, email VARCHAR(255), UUID VARCHAR(255), PRIMARY KEY (bookSetID));')
print('create table coachingService (coachingServiceID int NOT NULL, email VARCHAR(255), UUID VARCHAR(255), PRIMARY KEY (coachingServiceID));')

f = open('data.json')
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