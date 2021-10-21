# Part 1

Below are some assumptions Im making. Ideally I would validate these assumptions or update the script to error out on data that fails these assumptions
- There is 1 record per order (assume UUID is the order ID)
- Each customer can have more than 1 order
- Each customer can therefore correspond to more than 1 record
- An order can have any number of books and coaching services
- Each customer must have a unique email (i.e. if 2 records have the same email, they must belong to the same customer)

With these in mind a relational data model might look like

Customers
- [PK] Id 
   - not currently included since we assume UUID is an order ID
- [Unique] Email 
- Customer Name
- Cell phone
- Default address

Orders
- [PK] Id 
- [FK] CustomerId
- Total
- Date
- Discount
- Address
   - want to include this here because the customers address might change over time but the order address should not
- Optional IX on CustomerID for query performance 
   - i.e. we want to quickly get all the orders placed by one customer

BookOrders
- [FK] OrderId
- BookId
- Optional PK on (OrderId, BookId)
   - if we want to ensure no duplicate books per order
- Optional IX on OrderId for query performance 
   - i.e we want to quickly get all the books in 1 order
- Optional IX on BookId for query performance 
   - i.e. we want to quickly get all the orders that contain a particular book

ServiceOrders
- [FK] OrderId
- ServiceId
- // Other service order data here? 
- Optional PK on (OrderId, ServiceId) 
   - if we want to ensure no duplicate services per order
- Optional IX on OrderId for query performance 
   - i.e we want to quickly get all the services in 1 order
- Optional IX on ServiceId for query performance 
   - i.e. we want to quickly get all the orders that contain a particular service



// This table might or might not be needed?


BookRefs
- [PK] Id
- Other book data here?

ServiceRefs
- [PK] Id
- Other service data here?


Note: we would want to establish some conventions for table/column names. E.g. above I used
- Plural tables
- Singular columns
- Dont prefix the Id with the name of the table

# Part 2

Note: this implementation wont scale. Dont use this in prod

## Running locally

Run the command `docker compose up`
- Input data has already been copied to docker-data/input.json
  - This file is shared with the docker container via a volume
- Output file should appear at docker-data/output.sql