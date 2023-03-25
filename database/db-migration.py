import json
import re
import uuid

DATA_FILE = "../data.json"

sql_create_tables = """
    CREATE TABLE order (
        uuid varchar(36),
        customer_id varchar(36),
        total int,
        date timestamp,
        discount_code varchar(20),

        primary key (uuid)
    );

    CREATE TABLE customer (
        uuid varchar(36),
        name varchar(100),
        cell_phone varchar(20),
        email varchar(100),
        address varchar(250),

        primary key (uuid)
    );

    CREATE TABLE coaching_service_order (
        coaching_service_id varchar(36),
        order_id varchar(36)
    );

    CREATE TABLE book_set_order (
        book_set_id varchar(36),
        order_id varchar(36)
    );
"""

print(sql_create_tables)

non_numeric_regex = r'\D'
data = []
with open(DATA_FILE) as json_file:
    data = json.load(json_file)

for record in data:
    # transform data as necessary before creating new records
    # more rigorous data validation and transformation would be needed for any significant data set
    customer_uuid = uuid.uuid4()

    # strip punctuation from order total ('$5.00' becomes '500') to follow
    # best practices on storing money amounts
    order_total = re.sub(non_numeric_regex, '', record['orderTotal'])

    # create new customer record
    sql_insert_customer = f"""
        INSERT INTO customer
        VALUES (
            "{customer_uuid}",
            "{record['customerName']}",
            "{record['cellPhone']}",
            "{record['email']}",
            "{record['address']}"
        );
    """
    print(sql_insert_customer)

    # create order record for customer
    sql_insert_order = f"""
        INSERT INTO order
        VALUES (
            "{record['UUID']}",
            "{customer_uuid}",
            {order_total},
            "{record['orderDate']}",
            "{record['discountCode']}"
        );
    """
    print(sql_insert_order)

    # coaching service/book set IDs may not exist in the record
    if 'coachingServiceID' in record:
        for id in record['coachingServiceID']:
            sql_insert_coaching = f"""
                INSERT INTO coaching_service_order
                VALUES (
                    "{id}",
                    "{record['UUID']}"
                );
            """
            print(sql_insert_coaching)
    
    if 'bookSetID' in record:
        for id in record['bookSetID']:
            sql_insert_bookset = f"""
                INSERT INTO book_set_order
                VALUES (
                    "{id}",
                    "{record['UUID']}"
                );
            """
            print(sql_insert_bookset)
