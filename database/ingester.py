import json
  
# Opening JSON file
f = open('example.json')
  
# returns JSON object as 
# a dictionary
data = json.load(f)
  
# Iterating through the json
# list
for i in data:
    #Yes, I can just use dot notation where the column doesn't have a space.
    #But, may as well be consistent.
    name = i['Customer Name']
    phone = i['Cell Phone']
    email = i['Email']
    address = i['Address']
    #This statement would probably include a database spec in practice, unless the script included a USING statement.
    #Ofcourse, a real ingester would work directly, using prepared statements

    print(f'INSERT INTO customer (email, name, phone, address) VALUES(\'{email}\,\'{name}\',\'{phone}\',\'{address}\');')

    #Although I might disable constraints and foreign key checks for this process to simplify,
    #I'll stage things so that constraints shouldn't be violated. Ergo, junction tables last.

    discount_code = i['Discount Code']

    print(f'INSERT INTO discount_code (id) VALUES(\'{discount_code}\') WHERE NOT EXISTS (SELECT 1 FROM discount_code where id = \'{discount_code}\');')

    order_uuid = i['UUID']
    total = i['Order Total Number']
    date = ['Order Date String']

    #Next, add order, as this only directly depends upon customer and discount code
    print(f'INSERT INTO order (uuid, total, date, customer_email, discount_code_id) VALUES({order_uuid}, {total}, \'{date}\', \'{email}\', \'{discount_code}\')')

    #Now, add the coaching services to coaching service table and junction
    for service_id in i['Coaching Service ID']:
        print(f'INSERT INTO coaching_service (uuid) VALUES({service_id}) WHERE NOT EXISTS (SELECT 1 FROM coaching_service where uuid = {service_id});')

        #And the junction table
        print(f'INSERT INTO coaching_order_junction (coaching_uuid, order_uuid) VALUES({service_id}, {order_uuid});')

    #Repeat for book set
    for book_id in i['Book Set ID']:
        print(f'INSERT INTO book_set (uuid) VALUES({book_id}) WHERE NOT EXISTS (SELECT 1 FROM book_set where uuid = {book_id});')

        #And the junction table
        print(f'INSERT INTO book_set_order_junction (book_set_uuid, order_uuid) VALUES({book_id}, {order_uuid});')

# Closing file
f.close()