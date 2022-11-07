# Purpose of this contribution

The purpose of the main.py file is to load, re-structure, and migrate data from the data.json file into a relational database in an efficient and reprogrammable way. To do so, I proposed the use of data classes to store the data from the .json format. Data classes provide a frozen instance which is neat for the design of an immutable relational database. A connection between the user's database is connected to migrate and insert data into the new database.

# Proposed database design

It is my understanding that the new design of the database will ensure orders are invoiced correctly within the system. This means the orders table should be separated from other fields and have different tables to connect based on relations between the tables.

The proposed design tables are assuming there are no direct relations between orders, coaching services, and book sets. These tables can be joined through the field name UUID.

Orders Table:
|Field Name | Type   | Sample Value |
| --------- | ------ | ------------ |
|UUID  | Number | 12345678         |
|Customer Name | String | Jane Doe    |
|Cell Phone | String | 405.867.5309 |
|Email      | String |jane_teacher@gmail.com |
|Address    | String | 123 School Way, Dallas TX 75001 |
|Order Total | Number | 37.99 |
|Order Date | String | 12/25/22T23:00:05Z |
|Discount Code | String | CHEAP |

CoachingService:
|Field Name | Type   | Sample Value |
| --------- | ------ | ------------ |
|UUID  | Number | 12345678         |
|Coaching Service ID | List of Number | [37,2002,101] |

BookSet: 
|Field Name | Type   | Sample Value |
| --------- | ------ | ------------ |
|UUID  | Number | 12345678         |
|Book Set ID| List of Number | [22,21] |

# Implementations

- Read the .json data file into a python dictionary
- Convert orderTotal from a string data type to float
- Handl all the missing data in coachingServiceID by setting default initialization 
- Convert dictionary data structure to dataclass objects
- Create a config file to authenticate the database user account
- Create tables in DB
- Migrate data attributes from dataclass objects into the new database through authentication

# Future work

- Adding try and exception in line 121 for any tables that may have already existed in the database. 
- Changing the design of table layouts/data classes depending on the proposed implementation in the future