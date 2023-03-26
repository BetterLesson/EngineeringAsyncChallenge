import json
import nanoid
import itertools

def prettyPrint(jsonFile):
    return print(json.dumps(jsonFile, indent=2))

with open('../data.json', 'r') as f:
    data = json.load(f)

customers = {}
orders = {}

coachingServicesMap = {}
bookSetMap = {}

orderItems = []
items = []
itemTypes = ['Coaching Service', 'Book Set']

typeItemIdGenerate = itertools.count()
orderItemLineIdGenerate = itertools.count()

def createOrderLineItem(orderId, itemId):
    return {
        'id': next(orderItemLineIdGenerate),
        'orderId': orderId,
        'itemId': itemId
    }

for record in data:
    customerName = record['customerName']
    phone = record['cellPhone']
    email = record['email']
    address = record['address']
    
    orderId = record['UUID']
    orderTotal = record['orderTotal']
    orderDate = record['orderDate']
    discountCode = record['discountCode']

    if email not in customers:
        customers[email] = {
            'id': nanoid.generate(),
            'name': customerName,
            'phone': phone,
            'email': email,
            'address': address
        }
    customerId = customers[email]['id']

    orderObj = {
        'id': orderId,
        'customerId': customerId,
        'date': orderDate,
        'total': orderTotal,
        'discount': discountCode
    }
    orders[orderId] = orderObj

    if 'coachingServiceID' in record:
        for coachingServiceId in record['coachingServiceID']:
            if coachingServiceId in coachingServicesMap:
                itemObj = coachingServicesMap[coachingServiceId]
            else:
                itemObj = {
                    'id': next(typeItemIdGenerate),
                    'type': itemTypes[0],
                    'typeId': coachingServiceId
                }
                coachingServicesMap[coachingServiceId] = itemObj
                items.append(itemObj)
            orderItems.append(createOrderLineItem(orderId, itemObj['id']))
    
    if 'bookSetID' in record:
        for bookSetId in record['bookSetID']:
            if bookSetId in bookSetMap:
                itemObj = bookSetMap[bookSetId]
            else:
                itemObj = {
                    'id': next(typeItemIdGenerate),
                    'type': itemTypes[1],
                    'typeId': bookSetId
                }
                bookSetMap[bookSetId] = itemObj
                items.append(itemObj)
            orderItems.append(createOrderLineItem(orderId, itemObj['id']))
    

def customerInserts(customersList):
    for customer in customersList:
        print('INSERT INTO customer (id, name, phone, email, address) '
        + f'VALUES ("{customer["id"]}", "{customer["name"]}", "{customer["phone"]}", "{customer["email"]}", "{customer["address"]}");')

def orderInserts(ordersList):
    for order in ordersList:
        print('INSERT INTO order (id, customer_id, date, total, discount) '
        + f'VALUES ("{order["id"]}", "{order["customerId"]}", "{order["date"]}", "{order["total"]}", "{order["discount"]}");' )

def orderItemInserts(orderItemsList):
    for orderItem in orderItemsList:
        print('INSERT INTO order_item (id, order_id, item_id) '
        + f'VALUES ({orderItem["id"]}, "{orderItem["orderId"]}", {orderItem["itemId"]});')

def itemInserts(itemsList):
    for item in itemsList:
        print('INSERT INTO item (id, type, type_item_id) '
        + f'VALUES ({item["id"]}, "{item["type"]}", {item["typeId"]});')

# prettyPrint(customers)
# prettyPrint(orders)
# prettyPrint(orderItems)
# prettyPrint(items)

customerInserts(customers.values())
orderInserts(orders.values())
orderItemInserts(orderItems)
itemInserts(items)