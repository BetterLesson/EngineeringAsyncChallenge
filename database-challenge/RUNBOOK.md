Challenge Three Runbook
Overview
This is a Node.js application for the BetterLesson takehome database challenge. The main file is index.js and can be run using the npm start command.

## Prerequisites

Node.js v14 or higher
NPM package manager

Installation
Clone the repository to your local machine.
Navigate to the root directory of the project in your terminal.
Run npm install to install the required dependencies.

Usage
In your terminal, navigate to the root directory of the project.
Run npm start to start the application.
The application will log the results to the console.
If you encounter any issues, see the Troubleshooting section (TBD).

If you encounter any other issues, please consult the documentation or open an issue on the project repository.

License
This project is licensed under the ISC License. See the LICENSE file for details.

## Relational data model proposed design below

## A possible sql struct.

**users table could have an id genereated as well**
**certain user data could be encrpyted || hashes**

users table
-user_id(primary_key)
-email
-full_name
-cell_phone
-address

orders table
-order_id (primary_key) -> UUID
-order_total
-order_date
-discount_code
-user_id (foreign_key to users table)

coaching_services table
-coaching_Seervice_id (primary_key)
-coaching_service_name

books_table
-book_id (primary_key)
-book_name

orders_to_coaching_services table
-order_id (foreign_key to orders table)
-caoching_service_id (foreign_key to coaching_services table)

orders_to_books
-order_id (foreign_key to orders table)
-book_id (foreign_key to books table)

**There could also be another called logs table for storing errors whiling insertion**

logs table
-order_id
-error
-timestamp

## Possible SQL Tables Detailed

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS coaching_services CASCADE;
DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS services_orders CASCADE;
DROP TABLE IF EXISTS services_books CASCADE;

CREATE TABLE users(
user_id SERIAL PRIMARY KEY,
user_email VARCHAR UNIQUE NOT NULL,
full_name VARCHAR NOT NULL,
cell_phone_number VARCHAR,
user_address VARCHAR NOT NULL
);

CREATE TABLE coaching_services(
coaching_service_id BIGINT UNIQUE NOT NULL,
coaching_service_name VARCAHR NOT NULL,
);

CREATE TABLE books(
book_id BIGINT UNIQUE NOT NULL,
book_name VARCAHR NOT NULL
);

CREATE TABLE orders(
order_id VARCHAR UNIQUE NOT NULL,
order_date TIMESTAMP NOT NULL,
order_total DECIMAL(10,2) NOT NULL,
user_email REFERENCES users(user_email) NOT NULL,
discount_code VARCHAR
);

CREATE TABLE services_orders(
order_id REFERENCES orders(order_uuid) UNIQUE NOT NULL,
service_id REFERENCES coaching_services(coaching_service_id)
);

CREATE TABLE books_orders(
book_id REFERENCES books(book_id),
order_id REFERENCES orders(order_id) UNIQUE NOT NULL
);
