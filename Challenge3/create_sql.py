import json
from numpy import unicode

customer_table = "customer"
order_table = "order"
customer_item =['UUID','Customer Name','Cell Phone','Email','Address']
order_item =['Coaching Service ID','Book Set ID','Order Total','Order Date','Discount Code']



def create_json(jsonData,dataItem,dbTable,sqlStatement=''):
    '''

    :param jsonData: json data item
    :param dataItem: json item
    :param dbTable: string dbTable to create the sql statement
    :param sqlStatement: string to append to
    :return: sql statement
    '''
    listKey = "("
    listValue = "("
    isfirstPair = True
    for key, value in jsonData.items():
        if key in dataItem or key =="UUID":
            if not isfirstPair:
                listKey += ", "
                listValue += ", "
            isfirstPair = False
            listKey += key.replace(" ", "") #remove white space
            if type(value) in (str, unicode):
                listValue += "'" + value + "'"
            else:
                listValue += str(value)
    listKey += ")"
    listValue += ")"

    sqlStatement += "INSERT INTO " + dbTable + " " + listKey + " VALUES " + listValue + "\n"

    return sqlStatement


with open ('data.json','r') as f:
    jsondata = json.loads(f.read()) #read json

#process the two table
for json in jsondata:
    customerSqlStatement = create_json(json, customer_item,customer_table)
    orderSqlStatement = create_json(json, order_item,order_table)


#print the sql statement
print(customerSqlStatement)
print(orderSqlStatement)