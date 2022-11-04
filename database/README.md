# Frontend Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Complete

* General structure
* JPA setup
* Overall inserts and data model build

## Incomplete

* Code cleanup, need to make service classes to abstract logic of reading file and mapping to SQL objects
* Need to make file IO component to read in JSON file
* Need to break discount code out into separate table
* Implement logic to set sequence for orderId to the highest value from the import

## Available Scripts

In the project directory, you can run:

### `mvn spring-boot:run`

Runs the app in the development mode.

This will execute it as a command line runner. Check the console for SQL output. 

## Schemas

### Orders
create table orders (id bigint not null, discount_code varchar(255), order_date varchar(255), order_total double, customer_id bigint, primary key (id))

### Book Set
create table book_set (id bigint not null, book_set_ids bigint)
alter table book_set add constraint orders_FK foreign key (id) references orders
### Coaching Service
create table coaching_service (id bigint not null, coaching_service_ids bigint)
alter table coaching_service add constraint orders_FK foreign key (id) references orders
### Customer
create table customer (id bigint not null, name varchar(255), primary key (id))

### Customer Address
create table customer_address (id bigint not null, address varchar(255), customer_id bigint, primary key (id))
alter table customer_address add constraint customer_FK foreign key (customer_id) references customer
### Customer Contact
create table customer_contact (id bigint not null, email varchar(255), phone varchar(255), customer_id bigint, primary key (id))
alter table customer_contact add constraint customer_FK foreign key (customer_id) references customer
