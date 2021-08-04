import json

""" This script will convert the data provided in sample_data.json
    into sql insert statements for the tables defined in my relation diagram

    I probably could have deduplicated some of this, but I'm happy with it,
    seeing as it's indended to be a one-off script
"""

with open('sample_data.json', 'r') as fs:
    data = json.load(fs)

print('''
CREATE TABLE Customer (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(64),
    email VARCHAR(255) NOT NULL,
);

CREATE TABLE Address (
    id INT NOT NULL PRIMARY KEY,
    address VARCHAR(512) NOT NULL,
    customer_id INT NOT NULL FOREIGN KEY REFERENCES Customer(id)
);

CREATE TABLE Order (
    id INT NOT NULL PRIMARY KEY,
    date TIMESTAMP,
    total NUMERIC(10,2),
    customer_id INT NOT NULL FOREIGN KEY REFERENCES Customer(id),
    address_id INT NOT NULL FOREIGN KEY REFERENCES Address(id)
);

CREATE TABLE Discount_Codes (
    id INT NOT NULL PRIMARY KEY,
    code VARCHAR(10) NOT NULL UNIQUE
);

CREATE TABLE Order_Discount (
    id INT NOT NULL PRIMARY KEY,
    order_id INT NOT NULL FOREIGN KEY REFERENCES Order(id),
    discount_code_id INT NOT NULL FOREIGN KEY REFERENCES Discount_Codes(id)
);

CREATE TABLE Product_Type (
    id INT NOT NULL PRIMARY KEY,
    description VARCHAR(64) NOT NULL
);

CREATE TABLE Product (
    id INT NOT NULL PRIMARY KEY,
    product_type_id INT NOT NULL FOREIGN KEY REFERENCES Product_Type(id)
);

CREATE TABLE Order_Line (
    id INT NOT NULL PRIMARY KEY,
    order_id INT NOT NULL FOREIGN KEY REFERENCES Order(id),
    product_id INT NOT NULL FOREIGN KEY REFERENCES Product(id),
    quantity INT NOT NULL
);
''')

def insert_customers(records):
    values = ',\n    '.join([
        "({id}, '{name}', '{phone}', '{email}')".format(**record)
        for record in records
    ])
    print('''
    INSERT INTO Customer (id, name, phone, email)
    VALUES 
    ''' + values + ';\n')

def insert_addresses(records):
    values = ',\n    '.join([
        "({id}, '{address}', {customer_id})".format(**record)
        for record in records
    ])
    print('''
    INSERT INTO Address (id, address, customer_id)
    VALUES 
    ''' + values + ';\n')

def insert_discount_codes(records):
    values = ',\n    '.join([
        "({id}, '{code}')".format(**record)
        for record in records
    ])
    print('''
    INSERT INTO Discount_Code (id, code)
    VALUES 
    ''' + values + ';\n')

def insert_products(records):
    values = ',\n    '.join([
        "({id}, {item_type_id}, {old_id})".format(**record)
        for record in records
    ])
    print('''
    INSERT INTO Product (id, item_type_id, old_id)
    VALUES 
    ''' + values + ';\n')

def insert_orders(records):
    values = ',\n    '.join([
        "({id}, '{date}', '{total}', {customer_id}, {address_id}, '{uuid}')"
        .format(**record) for record in records
    ])
    print('''
    INSERT INTO Order (id, date, total, customer_id, address_id, uuid)
    VALUES
    ''' + values + ';\n')

def insert_order_lines(records):
    values = ',\n    '.join([
        "({id}, {order_id}, {product_id}, {quantity})"
        .format(**record) for record in records
    ])    
    print('''
    INSERT INTO Order_Line (id, order_id, product_id, quantity)
    VALUES 
    ''' + values + ';\n')

def insert_order_discounts(records):
    values = ',\n    '.join([
        "({id}, {order_id}, {discount_code_id})"
        .format(**record) for record in records
    ])    
    print('''
    INSERT INTO Order_Line (id, order_id, discount_code_id)
    VALUES 
    ''' + values + ';\n')

# I'm using email to determine unique customers, as 
# name, cell, and address may change or may not be unique to customer
customers = {}
# I created a separate address table because each order should be
# tracked by which address it's shipped to, which may not be the
# same for the customer over time
addresses = {}
products = {}
discount_codes = {}
orders = []
order_lines = []
order_discounts = []
product_types = {
    0: 'book_set',
    1: 'coaching_service' 
}

print('''
    INSERT INTO Product_Type (id, description)
    VALUES (0, 'book_set'),
           (1, 'coaching_service');
''')

def id_generator(start_index=0):
    next_id = start_index
    while True:
        yield next_id
        next_id += 1

customer_id = id_generator()
address_id = id_generator()
product_id = id_generator()
discount_code_id = id_generator()
order_id = id_generator()
order_line_id = id_generator()
order_discount_id = id_generator()

# order the records by date so that volitile data
# such as phone number get overridden correctly
data = sorted(data, key=lambda record: record['Order Date'])

for record in data:
    name = record['Customer Name']
    phone = record['Cell Phone']
    email = record['Email']
    address = record['Address']
    coaching_service_ids = record['Coaching Service ID']
    book_set_ids = record['Book Set ID']
    order_total = record['Order Total']
    order_date = record['Order Date']
    discount_code = record['Discount Code']
    uuid = record['UUID']

    if email not in customers:
        record_customer_id = next(customer_id)
        customers[email] = {
            'id': record_customer_id,
            'name': name,
            'phone': phone,
            'email': email
        }
    else:
        record_customer_id = customers[email]['id']
        customers[email] = {
            'id': record_customer_id,
            'name': name,
            'phone': phone,
            'email': email
        }

    # using a tuple here allows me to have the same address
    # for multiple customers (which may be the case if the
    # customer is a school)
    if (record_customer_id, address) not in addresses:
        record_address_id = next(address_id)
        addresses[(record_customer_id, address)] = {
            'address': address,
            'customer_id': record_customer_id,
            'id': record_address_id
        }
    else:
        record_address_id = addresses[(record_customer_id, address)]['id']

    
    record_order_id = next(order_id)
    orders.append({
        'id': record_order_id,
        'date': order_date,
        'total': order_total,
        'customer_id': record_customer_id,
        'address_id': record_address_id,
        'uuid': uuid
    })
    
    if discount_code not in discount_codes:
        record_discount_code_id = next(discount_code_id)
        discount_codes[discount_code] = {
            'id': record_discount_code_id,
            'code': discount_code
        }
    else:
        record_discount_code_id = discount_codes[discount_code]['id']
    
    order_discounts.append({
        'id': next(order_discount_id),
        'order_id': record_order_id,
        'discount_code_id': record_discount_code_id
    })
    
    for service_id in coaching_service_ids:
        if ('coaching_service', service_id) not in products:
            record_product_id = next(product_id)
            products[('coaching_service', service_id)] = {
                'item_type_id': 0,
                'old_id': service_id,
                'id': record_product_id
            }
        else:
            record_product_id = products[('coaching_service', service_id)]['id']
        
        order_lines.append({
            'id': next(order_line_id),
            'order_id': record_order_id,
            'product_id': record_product_id,
            'quantity': 1,
        })

    for book_set_id in book_set_ids:
        if ('book_set', book_set_id) not in products:
            record_product_id = next(product_id)
            products[('book_set', book_set_id)] = {
                'item_type_id': 1,
                'old_id': book_set_id,
                'id': record_product_id
            }
        else:
            record_product_id = products[('book_set', book_set_id)]['id']
        
        order_lines.append({
            'id': next(order_line_id),
            'order_id': record_order_id,
            'product_id': record_product_id,
            'quantity': 1,
        })


# All the relationships and data are known.
# Now we just need to insert them into the database
# In the proper order, so the foreign keys resolve
insert_customers(customers.values())
insert_addresses(addresses.values())
insert_discount_codes(discount_codes.values())
insert_products(products.values())
insert_orders(orders)
insert_order_discounts(order_discounts)
insert_order_lines(order_lines)