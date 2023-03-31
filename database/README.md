Additional steps
- Obviously, all of the various descriptions, short names, discount percents etc... will be ingested blank/null. These will need to be filled in later, or the ingest script will need another datasource for them. Some will probably remain blank, especially for irrelevant/historical entries.
- I would also add foreign key as well as non-null constraints and dial in some of the varchar lengths, as needed.

Design reasoning
- I considered whether to use junction tables for the book set and coaching service ids, as opposed to the order storing an array of ids.
  - Ultimately, I chose junction tables for the following reasons
    - At the cost of some complexity, junction tables are generally more performant and flexible, especially for Online Analytical Processing (OLAP)
    - Both of these data types seem like they may be subject to change after initial order placement, which can get messy when dealing with an array of ids storage type
    - Even for datapoints that are immutable, I would lean towards using junction tables universally for the sake of consistency.
- Kinnda odd to call a number a UUID. But, I'll go with it.
- I'm assuming the UUID given is the order ID. I'm going to go ahead and use customer email as a unique ID for simplicity, though I don't really like doing so.
- I considered keeping track of which book sets and coaching services had already been inserted. But, where not exists is simpler and also handles the case where the db doesn't start empty (Though if that were a possibility, I'd add it to all the inserts or include a pre-clear of tables) 