// Create a program that:
// 1. READS IN a JSON file that contains the records from the old database
// 2. FORMATS the data to match your new data model
// 3. PRINTS SQL statements to console that would insert these records into the new database

// pretend the migrations.up and .down are in nice, tidy separate files. I'm just riffing here.

var express = require('express');
var app = express();

const hostname = '127.0.0.1';
const port = 3001;

app.use(express.json())

////
////
////
////
// SET UP TABLES //
////
////
////
////

console.log(`--------------------------------------`)
console.log(`----------
CREATE ALL TABLES
--------`)

console.log('creating customers table')
console.log(`
migration.up:
BEGIN;
CREATE TABLE IF NOT EXISTS customers
(
    id INTEGER PRIMARY KEY,
    customer_name VARCHAR (50) UNIQUE NOT NULL,
    cell_phone VARCHAR (50) NOT NULL,
    email VARCHAR (300) UNIQUE NOT NULL, 
    mailing_address VARCHAR (300) UNIQUE NOT NULL
)
COMMIT;

migration.down:
BEGIN;

DROP TABLE IF EXISTS customers;

COMMIT;
`)

console.log(`--------------
creating orders table`)
console.log(`
migration.up:
BEGIN;
CREATE TABLE IF NOT EXISTS order_details
(
    id INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL
    order_id INTEGER NOT NULL
    service_id INTEGER NOT NULL
    product_id INTEGER NOT NULL
    order_total INTEGER NOT NULL
    order_date TIMESTAMP NOT NULL
    discount_id VARCHAR (50)
)
COMMIT;

migration.down:
BEGIN;

DROP TABLE IF EXISTS order_details;

COMMIT;
`)

console.log(`--------------
creating discounts table`)
console.log(`
migration.up:

BEGIN;
CREATE TABLE IF NOT EXISTS discounts
(
    id INTEGER PRIMARY KEY,
    code VARCHAR (50) NOT NULL
)
COMMIT;

migration.down:

BEGIN;

DROP TABLE IF EXISTS discounts;

COMMIT;
`)

console.log(`--------------
creating books table`)
console.log(`
migration.up:

BEGIN;
CREATE TABLE IF NOT EXISTS books
(
    id INTEGER PRIMARY KEY,
    description VARCHAR (50) NOT NULL
)
COMMIT;

migration.down:

BEGIN;

DROP TABLE IF EXISTS books;

COMMIT;
`)


console.log(`--------------
creating coaching_services table`)
console.log(`
migration.up:

BEGIN;
CREATE TABLE IF NOT EXISTS coaching_services
(
    id INTEGER PRIMARY KEY,
    description VARCHAR (50) NOT NULL
)
COMMIT;

migration.down:

BEGIN;

DROP TABLE IF EXISTS coaching_services;

COMMIT;
`)


////
////
////
////
// INSERTS //
////
////
////
////

// My plan of action from my VERY non-DB-architecture background is to:
// ASSUMING happy path with no BAD data -- 
// 1. Fill in the base tables so we have the id's we need to populate the others.
// 2. Populate the order-related tables. 
// 3. Hope I did this right??

let migrationData = require('./migrateMe.json');

console.log(`--------------------------------------`)
console.log(`----------
POPULATE BASE TABLES
--------`)



// id INTEGER PRIMARY KEY,
// customer_name VARCHAR (50) UNIQUE NOT NULL,
// cell_phone VARCHAR (50) NOT NULL,
// email VARCHAR (300) UNIQUE NOT NULL, 
// mailing_address VARCHAR (300) UNIQUE NOT NULL

console.log('INSERTing into customers table')
console.log(`
INSERT INTO customers VALUES
    (migrationData.UUID, migrationData['Customer Name'], migrationData.['Cell Phone'], migrationData.Email, migration.Data.Address);
    `)


// id INTEGER PRIMARY KEY, (autoGenerate/ auto-increment)
// code VARCHAR (50) NOT NULL

console.log('INSERTing into discounts table')
console.log(`
INSERT INTO discounts VALUES
    (migrationData.['Discount Code'])
`)


// id INTEGER PRIMARY KEY,
// description VARCHAR (50) NOT NULL

console.log('INSERTing into books table')
// iterate through array of book_ids and insert INTS as PK for each with description set from the KEY leaving us with --
console.log(`
INSERT INTO books VALUES
    (22, 'Book Set'),
    (21, 'Book Set')
`)


// id INTEGER PRIMARY KEY,
// description VARCHAR (50) NOT NULL

console.log('INSERTing into coaching_services table')
// iterate through array of service_ids and insert INTS as PK for each with description set from the KEY leaving us with --
console.log(`
INSERT INTO coaching_services VALUES
    (37, 'Coaching Service'),
    (2002, 'Coaching Service'),
    (101, 'Coaching Service'),
`)



console.log(`----------
POPULATING ORDER and JOIN tables FROM OTHER TABLES
-----------`)

// {
//     'UUID': '12345678',
//     'Customer Name': 'Jane Doe',
//     'Cell Phone': '405.867.5309',
//     'Email': 'jane.teacher@gmail.com',
//     'Address': '123 School Way, Dallas TX 75001',
//     'Coaching Service ID': [37,2002,101],
//     'Book Set ID': [22,21],
//     'Order Total': 37.99,
//     'Order Date': '12/25/22T23:00:05Z',
//     'Discount Code': 'CHEAP'
// }

// id INTEGER PRIMARY KEY (autoGenerated)
// customer_id INTEGER NOT NULL
// order_total INTEGER NOT NULL
// order_date TIMESTAMP NOT NULL
// discount_id VARCHAR (50)

console.log(`INSERTing into orders table`)
console.log(`
BEGIN;

INSERT INTO orders VALUES
(
    ${migrationData.UUID}, -- customer.id
    ${migrationData['Order Total']},
    ${migrationData['Order Date']},
    discounts.code WHERE discounts.code = migrationData['Discount Code']
)

COMMIT; 
`)

//

console.log('INSERTing into coachingServicesToOrders table')
// iterate through array of service_ids and insert that and the order_id
console.log(`
INSERT INTO coachingServicesToOrders VALUES
    (37, orders.id),
    (2002, orders.id),
    (101, orders.id),
`)

console.log('INSERTing into BooksToOrders table')
// iterate through array of books ids and insert that and the order_id
console.log(`
INSERT INTO BooksToOrders VALUES
    (22, orders.id),
    (21, orders.id),
`)







app.listen(port, hostname, () => {});

