# Database Challenge

## Part 1

Proposed relational design of the given document data. Intended for Postgres.


```sql
CREATE TYPE item_type_enum AS ENUM ('coaching_service', 'book_set');

CREATE TABLE customers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_name TEXT,
  cell_phone TEXT,
  email TEXT,
  address TEXT
);

CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID REFERENCES customers(id) NOT NULL,
  order_total TEXT NOT NULL,
  order_date TIMESTAMP WITH TIME ZONE NOT NULL,
  discount_code TEXT
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id UUID REFERENCES orders(id) NOT NULL,
  item_type item_type_enum NOT NULL
);
```

## Part 2

The following program parses the data and prints out SQL statements intended for PostgresSQL.

To run, please do the following.

Install Packages then run start script
```
npm install
npm start
```

### Console Output
```sql
CREATE TYPE item_type_enum AS ENUM ('coaching_service', 'book_set');

CREATE TABLE customers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_name TEXT,
  cell_phone TEXT,
  email TEXT,
  address TEXT
);

CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID REFERENCES customers(id) NOT NULL,
  order_total TEXT NOT NULL,
  order_date TIMESTAMP WITH TIME ZONE NOT NULL,
  discount_code TEXT
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id UUID REFERENCES orders(id) NOT NULL,
  item_type item_type_enum NOT NULL
);


INSERT INTO customers(id, customer_name, cell_phone, email, address)
VALUES ('7c8ae19e-a742-4390-8c16-34c45b3b07c1', 'Benson Mack', '+1 (856) 510-2352', 'bensonmack@zomboid.com', '564 Hull Street, Islandia, Colorado, 8332');


INSERT INTO orders (id, customer_id, order_total, order_date, discount_code)
VALUES ('403e4421-955c-412e-8816-42a635e9b5dd', '7c8ae19e-a742-4390-8c16-34c45b3b07c1', '$1,639.86', '2015-08-28T09:55:00 +05:00', 'adipisicing');


INSERT INTO order_items(id, order_id, item_type)
VALUES(323, '403e4421-955c-412e-8816-42a635e9b5dd', 'coaching_service');


INSERT INTO order_items(id, order_id, item_type)
VALUES(20001, '403e4421-955c-412e-8816-42a635e9b5dd', 'coaching_service');


INSERT INTO order_items(id, order_id, item_type)
VALUES(456, '403e4421-955c-412e-8816-42a635e9b5dd', 'coaching_service');


INSERT INTO order_items(id, order_id, item_type)
VALUES(367, '403e4421-955c-412e-8816-42a635e9b5dd', 'book_set');


INSERT INTO customers(id, customer_name, cell_phone, email, address)
VALUES ('85c6f7b5-425b-475f-93c6-9555eacbbacd', 'Helene Benson', '+1 (830) 537-3001', 'helenebenson@zomboid.com', '553 Garland Court, Curtice, Georgia, 7828');


INSERT INTO orders (id, customer_id, order_total, order_date, discount_code)
VALUES ('ccdc0cbd-44a4-4b1b-b182-d45d727d823a', '85c6f7b5-425b-475f-93c6-9555eacbbacd', '$2,263.59', '2020-02-18T05:21:54 +06:00', 'ea');


INSERT INTO order_items(id, order_id, item_type)
VALUES(351, 'ccdc0cbd-44a4-4b1b-b182-d45d727d823a', 'coaching_service');


INSERT INTO order_items(id, order_id, item_type)
VALUES(789, 'ccdc0cbd-44a4-4b1b-b182-d45d727d823a', 'coaching_service');


INSERT INTO order_items(id, order_id, item_type)
VALUES(367, 'ccdc0cbd-44a4-4b1b-b182-d45d727d823a', 'book_set');


INSERT INTO order_items(id, order_id, item_type)
VALUES(111, 'ccdc0cbd-44a4-4b1b-b182-d45d727d823a', 'book_set');


INSERT INTO customers(id, customer_name, cell_phone, email, address)
VALUES ('0564014c-df59-495b-b0fe-86d942a53a7e', 'Shelia Chase', '+1 (927) 448-2825', 'sheliachase@zomboid.com', '675 Gerritsen Avenue, Cumberland, Guam, 219');


INSERT INTO orders (id, customer_id, order_total, order_date, discount_code)
VALUES ('30064266-241d-4eb2-8746-6102eb36cbd6', '0564014c-df59-495b-b0fe-86d942a53a7e', '$1,943.53', '2020-10-08T03:12:08 +05:00', 'irure');


INSERT INTO order_items(id, order_id, item_type)
VALUES(476, '30064266-241d-4eb2-8746-6102eb36cbd6', 'coaching_service');


INSERT INTO order_items(id, order_id, item_type)
VALUES(9850, '30064266-241d-4eb2-8746-6102eb36cbd6', 'coaching_service');


INSERT INTO order_items(id, order_id, item_type)
VALUES(365, '30064266-241d-4eb2-8746-6102eb36cbd6', 'coaching_service');


INSERT INTO order_items(id, order_id, item_type)
VALUES(222, '30064266-241d-4eb2-8746-6102eb36cbd6', 'book_set');


INSERT INTO customers(id, customer_name, cell_phone, email, address)
VALUES ('0cfa7c5a-036c-4aff-97b4-8aca74eb4b6b', 'Wilkerson Christian', '+1 (881) 445-2868', 'wilkersonchristian@zomboid.com', '775 Oceanic Avenue, Healy, Florida, 6531');


INSERT INTO orders (id, customer_id, order_total, order_date, discount_code)
VALUES ('b413f33c-75df-47f0-819f-223e6218ef06', '0cfa7c5a-036c-4aff-97b4-8aca74eb4b6b', '$1,269.35', '2021-06-13T07:27:09 +05:00', 'laborum');


INSERT INTO order_items(id, order_id, item_type)
VALUES(1, 'b413f33c-75df-47f0-819f-223e6218ef06', 'coaching_service');


INSERT INTO order_items(id, order_id, item_type)
VALUES(546, 'b413f33c-75df-47f0-819f-223e6218ef06', 'coaching_service');


INSERT INTO order_items(id, order_id, item_type)
VALUES(587, 'b413f33c-75df-47f0-819f-223e6218ef06', 'book_set');


INSERT INTO order_items(id, order_id, item_type)
VALUES(909, 'b413f33c-75df-47f0-819f-223e6218ef06', 'book_set');


INSERT INTO customers(id, customer_name, cell_phone, email, address)
VALUES ('0c04f58a-162c-49db-b203-742d5600e808', 'Jennie Tyson', '+1 (861) 456-3948', 'jennietyson@zomboid.com', '410 Batchelder Street, Ona, Kentucky, 5167');


INSERT INTO orders (id, customer_id, order_total, order_date, discount_code)
VALUES ('69e0fb0c-90bc-4636-9ffc-89582e9cc330', '0c04f58a-162c-49db-b203-742d5600e808', '$3,492.11', '2014-07-26T11:43:18 +05:00', 'consequat');


INSERT INTO order_items(id, order_id, item_type)
VALUES(367, '69e0fb0c-90bc-4636-9ffc-89582e9cc330', 'book_set');


INSERT INTO order_items(id, order_id, item_type)
VALUES(8990, '69e0fb0c-90bc-4636-9ffc-89582e9cc330', 'book_set');


INSERT INTO order_items(id, order_id, item_type)
VALUES(74, '69e0fb0c-90bc-4636-9ffc-89582e9cc330', 'book_set');


INSERT INTO customers(id, customer_name, cell_phone, email, address)
VALUES ('91bd47e8-2a10-45dc-8ad7-248382fd8e2a', 'Lucas Alvarez', '+1 (922) 596-2566', 'lucasalvarez@zomboid.com', '726 Broome Street, Lemoyne, Massachusetts, 3154');


INSERT INTO orders (id, customer_id, order_total, order_date, discount_code)
VALUES ('03d7a866-b4c4-4ea1-868a-da4e6c86916d', '91bd47e8-2a10-45dc-8ad7-248382fd8e2a', '$2,807.34', '2018-04-18T11:55:21 +05:00', 'aute');
```
