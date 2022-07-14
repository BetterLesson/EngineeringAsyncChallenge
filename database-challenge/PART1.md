# Part 1 

## Initial NoSQL

|Field Name | Type   | Sample Value |
| --------- | ------ | ------------ |
|UUID  | Number | 12345678         |
|Customer Name | String | Jane Doe    |
|Cell Phone | String | 405.867.5309 |
|Email      | String |jane_teacher@gmail.com |
|Address    | String | 123 School Way, Dallas TX 75001 |
|Coaching Service ID | List of Number | [37,2002,101] |
|Book Set ID| List of Number | [22,21] |
|Order Total | Number | 37.99 |
|Order Date | String | 12/25/22T23:00:05Z |
|Discount Code | String | CHEAP |

## Data Model Visualization

The coaching service and book set ID lists should get moved into their own table and specify a primary key
using the combination of their ID and OrderId. The OrderID should be a foreign key referencing the order UUID.

### OrderInvoice Table

| UUID     | CustomerName | CellPhone      | Email                   | Address                          | OrderTotal | OrderDate           | DiscountCode |
|----------|--------------|----------------|-------------------------|----------------------------------|------------|---------------------|--------------|
| 12345678 | Jane Doe     | 405.867.5309   | jane_teacher@gmail.com  | 123 School Way, Dallas TX 75001  | 37.99      | 12/25/22T23:00:05Z  | CHEAP        |       

### CoachingService Table

| UUID | OrderId  |
|------|----------|
| 37   | 12345678 |
| 2002 | 12345678 | 
| 101  | 12345678 | 

### BookSet Table

| UUID | OrderId  |
|------|----------|
| 22   | 12345678 |
| 21   | 12345678 |

## SQL

The proposed relational data model would get generated using the SQL below.

```roomsql
CREATE TABLE OrderInvoice (
    UUID int NOT NULL,
    CustomerName varchar(255) NOT NULL,
    CellPhone varchar(255) NOT NULL,
    Email varchar(255) NOT NULL,
    Address varchar(255) NOT NULL,
    OrderTotal float NOT NULL,
    OrderDate varchar(255) NOT NULL,
    DiscountCode varchar(255),
    PRIMARY KEY (UUID)
);
```

```roomsql

CREATE TABLE CoachingService (
    UUID int NOT NULL,
    OrderId int NOT NULL,
    CONSTRAINT PKCoachingService PRIMARY KEY (UUID,OrderId),
    CONSTRAINT FKCoachingService FOREIGN KEY (OrderId) REFERENCES order_invoice(UUID)
);
```

```roomsql
CREATE TABLE BookSet (
    UUID int NOT NULL,
    OrderId int NOT NULL,
    CONSTRAINT PKBookSet PRIMARY KEY (UUID,OrderId),
    CONSTRAINT FKBookSEt FOREIGN KEY (OrderId) REFERENCES order_invoice(UUID)
);
```
