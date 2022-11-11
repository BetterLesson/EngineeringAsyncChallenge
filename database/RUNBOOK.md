Database Challenge for Betterlesson
======================

The schema I designed has 3 Tables.

# Note:
For each order, in the orderitems table
there will be multiple entries.

For example for a coaching ID of 37, and 202
There would be 2 rows, where product ID is 37 and 202
and ProductType would be Coaching

Additionally, the insert statements are missing the last bit of code
to account for some of the columns being foreign keys.
In the interest of sticking close to the time limit I have not finished this portion.

Running the Script
---------------------

Navigate Inside /database and run
```
pip install -r requirements.txt
```

run

```
python main.py
```

The SQL Insert Commands Should Print to the Console