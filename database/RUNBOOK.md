# Database Example

This project uses a simple Python script to transform existing JSON data into SQL insert statements to help move the data to a new relational home.

### Prerequisites

To run the migration script, you will need:
* Python 3

### Using the Program

Some systems may come with Python 2 as the system default. On these systems, replace all following `python` commands with `python3` to ensure expected results.

(Optional) To run the program using a Python virtual environment, first run the following commands:
* `python -m venv env`
* `source env/bin/activate` (For Unix/Mac)
* `env\Scripts\activate.bat` (For Windows)

The script does not require any external modules, so a requirements.txt file is not provided.

From the main database directory, run:
```
python db-migration.py
```

The script prints out the SQL statements for the migration to standard output, starting with creating the new tables, then generating insert statements based on the provided `data.json` file.

### Future work

The overall database design may closely depend on how the data is later intended to be used. It would be fairly standard to break up the address, for example, and store street address, city, state, and zip code separately for better data insights on customer location. Or discount codes may require their own table if we wanted to store other information along with the code, such as percent or amount discounted, expiry time, etc.

Similarly, data transformation may depend on how clean the original data is. We may ideally want more null checks, or to reformat data to follow existing data patterns elsewhere in the database, such as reformatting how the phone number is stored to standardize it. We may also want duplicate data checks so that we don't add a customer again if they had previously submitted multiple orders.

This script can be thought of as a baseline, then, that could be iterated on to more closely match intentions for the data migration.
