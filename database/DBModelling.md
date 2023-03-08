# Database Challenge Part 1

## Assumptions
* UUID is tied to the order and not the customer
* Used email as PK for customer table
* 

### Customer
Email: VARCHAR2 (PK)
Customer Name: VARCHAR2
Cell Phone: VARCHAR2
Address: VARCHAR2

### Order
UUID(PK)
Product Type (Values of Coaching or Book)
Order Total NUMBER
Order Date TIMESTAMP
Discount Code VARCHAR2

### OrderCoaching
UUID
CoachingID (Composite PK with these two perhaps)

### OrderBook
UUID
BookID (Composite PK with these two perhaps)
