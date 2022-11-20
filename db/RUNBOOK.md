Run ./migrate.py to translate the following NoSQL table:

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

to these relational db tables:

Relational Model:

Customers Table

id, CustomerName, Address, Email, CellPhone

Orders Table

id, CustomerID, UUID, OrderTotal, OrderDate, Discount, Address

BookOrderType Table

id, OrderID (UUID), BookSetID

CoachingServiceOrderType Table

id, OrderID (UUID), CoachingServiceID
