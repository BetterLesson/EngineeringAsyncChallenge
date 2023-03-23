# Where I stand
I ultimately ran out of time trying to complete this challenge but here's where I'm at with this

## Completed:
* Part 1 - I've drawn out the diagram and included this in the folder

## Incompleted: 
* Part 2 - The ingestion itself, but at a high level what I would do: 
** Create the various tables - customers, orders, coachingservice, bookset, discounts
** Have a cache of discount codes to their database ids
** Iterate through the list of orders and do the following: 

```
1. Insert the base record into Customers so the following: 
INSERT INTO Customers (uuid, name, cellphone, email, address, bookSetId, coachingServiceId) VALUES (....)

2. Check the local cache to see if the discount code has already been added. If it has, grab the id else insert into the database and update cache with the returned i. 
INSERT INTO Discounts (code, description) VALUES (...) RETURNING id

3. Insert the order info into Orders so the following
INSERT INTO Orders (total, date, customerID, discountID)

4. Iterating through the list of book set ids and coaching service ids, add them to their respective tables. Considering that we'll be doing this in a programming language, it will chuck an error if there's a duplicate but we can catch and lightly parse the error/assume that it's because of a duplicate. 

INSERT INTO CoachingService (id, description) VALUES (...)
INSERT INTO BookSet (id, description) VALUES (...)
```

`
