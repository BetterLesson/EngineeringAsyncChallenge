#!/usr/bin/env python

"""
A one off script to migrate a nosql db to a relational db.
"""

import json
import string
import uuid


def generate_sql_from_json(filepath):
    """
    Generates SQL Insert statements with a given json file
    """
    with open(filepath) as file:
        data = json.loads(file.read())

        for i in data:
            id = generate_uuid()
            print("INSERT INTO Customers (id, CustomerName, Address, Email, CellPhone) VALUES", "(" + id + ", " + ", " + i["customerName"] + ", "+ i["address"] + ", " + i["email"] + ", "+ i["cellPhone"] + ");")

            # Convert to pennies to avoid float issues
            order_total = i["orderTotal"].strip("$")
            order_total = order_total.replace(",", "")

            order_in_cents = str(int(round(float(order_total)*100)))

            print("INSERT INTO Orders (CustomerID, UUID, OrderTotal, OrderDate, Discount, Address) VALUES", "(" + id + ", "+ i["UUID"] + ", " + order_in_cents + ", " + i["orderDate"] + ", " + i["discountCode"] + ");")

            if "bookSetID" in i.keys():
                for book_set_id in i["bookSetID"]:
                    print("INSERT INTO BookOrderType (OrderID, BookSetID)" + " (" + i["UUID"] + ", " + str(book_set_id) + ");")

            if "coachingServiceID" in i.keys():
                for coaching_service_id in i["coachingServiceID"]:
                    print("INSERT INTO CoachingServiceOrderType (OrderID, ServiceTypeID)" + " (" + i["UUID"] + ", " + str(coaching_service_id) + ");")


        file.close()

def generate_uuid():
    """
    Generates a random UUID, used to populate the id field for Customers and Orders
    """
    return str(uuid.uuid4())

if __name__ == '__main__':
    generate_sql_from_json("data.json")

