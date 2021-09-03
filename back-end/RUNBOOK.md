Back End Challenge
==================

Installation
------------

This will assume that **python** (> 3.6) is installed and **virtualenv** is already set up.

Starting the project
--------------------

* After activating the virtualenv, install the required libraries by
```
pip install -r requirements.txt
```

* Run the server:
```
python api.py
```

Now the test api should be accessible at be visible in the browser at `http://127.0.0.1:5000/`

Endpoints
---------

The following endpoints can be used:

* `/reservation/:user` [GET] to fetch data for user `user` (for now anyone can try to access any user's reservations)
* `/reservation` [POST] to add new reservation
* 
For data parameters requirements for each endpoint, please see the comment in `api.py` file.

Test
----

Tests were not added due to time restrictions.