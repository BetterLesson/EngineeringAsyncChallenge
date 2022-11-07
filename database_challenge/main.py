from dataclasses import dataclass
import json
import sqlalchemy
from configparser import ConfigParser

# Define data classes
@dataclass
class Orders:
    UUID: str
    customerName: str
    cellPhone: str
    email: str
    address: str
    orderTotal: float
    orderDate: str
    discountCode: str

@dataclass
class CoachingService:
    UUID: str
    coachingServiceID: list[int]
  
@dataclass
class BookSet:
    UUID: str
    bookSetID: list[int]

# Input: list, dictionaries of json data
# Output: list, dictionaries of json data
def handle_missing_key_value(data_json):

    # Handle all the missing key-value by setting defaults
    default_keys = ['UUID', 'customerName', 'cellPhone', 'email', 'address',
                    'coachingServiceID', 'bookSetID', 'orderTotal', 
                    'orderDate', 'discountCode']

    # Set the default key and value
    for dictionary in range(len(data_json)):
        current_dict = data_json[dictionary]
        for key in default_keys:
            # Replace string to float data type
            if key == 'orderTotal':
                data_json[dictionary][key] = float(data_json[dictionary]['orderTotal'].replace('$', '').replace(',', ''))
                current_dict.setdefault(key)
            else:
                current_dict.setdefault(key)
    return data_json

# Input: list, dictionaries of json data
# Output: list, dataclass objects
def convert_json_to_dataclass_object(data_json):
    
    # Convert json dictionaries into Order dataclass objects
    data_class_orders = [
        
        Orders(UUID = data_json[obj]['UUID'], 
              customerName = data_json[obj]['customerName'], 
              cellPhone = data_json[obj]['cellPhone'],
              email = data_json[obj]['email'],
              address = data_json[obj]['address'],
              orderTotal = data_json[obj]['orderTotal'],
              orderDate = data_json[obj]['orderDate'],
              discountCode = data_json[obj]['discountCode']                    
        )
        for obj in range(len(data_json))
    ]

    # Convert json dictionaries into CoachingService dataclass objects
    data_class_coaching = [
        
        CoachingService(UUID = data_json[obj]['UUID'], 
              coachingServiceID = data_json[obj]['coachingServiceID']              
        )
        for obj in range(len(data_json))
    ]

    # Convert json dictionaries into dataclass objects
    data_class_bookSet = [
        
        BookSet(UUID = data_json[obj]['UUID'],
              bookSetID = data_json[obj]['bookSetID']                 
        )
        for obj in range(len(data_json))
    ]

    return data_class_orders, data_class_coaching, data_class_bookSet

# Input: list, dictionaries of json data
# Output: None
def write_to_database(data_class):

    # Read config file for account infomration
    file = './config.ini'
    config = ConfigParser()
    config.read(file)

    user = config['account']['user']
    pwd = config['account']['pwd']
    host = config['account']['host']
    database = config['account']['database']
    port = config['account']['port']

    # Connect to database
    eng = sqlalchemy.create_engine(f'postgresql://{user}:{pwd}@{host}:{port}/{database}')
    conn = eng.connect()

    if hasattr(data_class[0], 'customerName') == True:
        
        # Create tabe and define variable types
        create_table = '''CREATE TABLE Orders (
            UUID varchar(100),
            customerName varchar(100),
            cellPhone varchar(100),
            email varchar(255),
            address varchar(255),
            orderTotal real,
            orderDate varchar(100),
            discountCode varchar(255) 
        );
    ''' 
        conn.execute(create_table)

        # Insert data into database
        for data in range(len(data_class)):
            insert_string = f'''INSERT INTO Orders VALUES (
                '{data_class[data].UUID}', 
                '{data_class[data].customerName}', 
                '{data_class[data].cellPhone}',
                '{data_class[data].email}',
                '{data_class[data].address}',
                {data_class[data].orderTotal},
                '{data_class[data].orderDate}',
                '{data_class[data].discountCode}'
            );'''   
            conn.execute(insert_string)

    elif hasattr(data_class[0], 'coachingServiceID') == True:
        
        # Create tabe and define variable types
        create_table = '''CREATE TABLE CoachingService (
            UUID varchar(100),
            coachingServiceID varchar(255)
        );
        ''' 
        conn.execute(create_table)

        for data in range(len(data_class)):
            insert_string = f'''INSERT INTO CoachingService VALUES (
                '{data_class[data].UUID}', 
                '{data_class[data].coachingServiceID}'
            );'''
            conn.execute(insert_string)

    elif hasattr(data_class[0], 'bookSetID') == True:
        
        # Create tabe and define variable types
        create_table = '''CREATE TABLE BookSet (
            UUID varchar(100),
            bookSetID varchar(255)
        );
        ''' 
        conn.execute(create_table)

        for data in range(len(data_class)):
            insert_string = f'''INSERT INTO BookSet VALUES (
                {data_class[data].UUID}, 
                '{data_class[data].bookSetID}'
            );'''
            conn.execute(insert_string)
        
    return None

def main() -> None:
    
    # Read in json file
    file = open('../data.json') 
    data_json = json.load(file)
    file.close()
    
    # Data wrangling
    data_json = handle_missing_key_value(data_json)
    data_class_orders, data_class_coaching, data_class_bookSet = convert_json_to_dataclass_object(data_json)
    
    # Migrate data to relational database
    write_to_database(data_class_orders)
    write_to_database(data_class_coaching)
    write_to_database(data_class_bookSet)

if __name__ == "__main__":
    main()

# Read json file to python dict
# Convert orderTotal string data type to float
# Handled missing data in coachingServiceID
# Convert dict to dataclass objects
# Created config file to authenticate database user account
# Created relation tables in db
# Migrated dataclass object attributes into datatables

# Need to add try and exception in line 95 in table already existed