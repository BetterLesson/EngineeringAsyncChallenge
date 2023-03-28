import mysql.connector
import json
import random
import datetime

with open("data.json", "r") as file:
    data = json.load(file)

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Password!123",
    database="better_lesson_assessment",
)

dbconnect = mydb.cursor(buffered=True)

dummyBookSetPrices = list([25, 20, 30, 15, 28])
dummyBookSetTitles = list(["Math", "Science", "English", "History", "Art"])
coachingServiceNames = list(
    [
        "Coaching Service 1",
        "Coaching Service 2",
        "Coaching Service 3",
        "Coaching Service 4",
        "Coaching Service 5",
    ]
)
coachingServicePrices = list([120, 150, 200, 250, 300])

for i in range(len(data)):
    dataEntry = data[i]

    # Insert into customers table
    if "UUID" in dataEntry:
        sql = "INSERT IGNORE INTO customers (uuid, name, phone, email, address, created_at, updated_at) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        val = (
            dataEntry["UUID"],
            dataEntry["customerName"],
            dataEntry["cellPhone"],
            dataEntry["email"],
            dataEntry["address"],
            datetime.datetime.now(),
            datetime.datetime.now(),
        )
        dbconnect.execute(sql, val)

    # Insert into books_sets table
    if "bookSetID" in dataEntry:
        for i in range(len(dataEntry["bookSetID"])):
            sql = "INSERT IGNORE INTO books_sets (id, name, price, created_at, updated_at) VALUES (%s, %s, %s, %s, %s);"
            val = (
                dataEntry["bookSetID"][i],
                dummyBookSetTitles[random.randint(0, 4)],
                dummyBookSetPrices[random.randint(0, 4)],
                datetime.datetime.now(),
                datetime.datetime.now(),
            )
            dbconnect.execute(sql, val)

    # Insert into coaching_services table
    if "coachingServiceID" in dataEntry:
        for i in range(len(dataEntry["coachingServiceID"])):
            sql = "INSERT IGNORE INTO coaching_services (id, name, price, created_at, updated_at) VALUES (%s, %s, %s, %s, %s);"
            val = (
                dataEntry["coachingServiceID"][i],
                coachingServiceNames[i],
                coachingServicePrices[i],
                datetime.datetime.now(),
                datetime.datetime.now(),
            )
            dbconnect.execute(sql, val)

    # Insert into orders table
    sql = "INSERT IGNORE INTO orders (customer_uuid, discount_code, order_total, created_at, updated_at) VALUES (%s, %s, %s, %s, %s);"
    val = (
        dataEntry["UUID"],
        dataEntry["discountCode"],
        dataEntry["orderTotal"],
        datetime.datetime.now(),
        datetime.datetime.now(),
    )
    dbconnect.execute(sql, val)


# Second loop to insert into order_items table
for i in range(len(data)):
    # Insert into order_items table
    dataEntry = data[i]
    if "bookSetID" in dataEntry:
        for i in range(len(dataEntry["bookSetID"])):
            sql = "SELECT id from books_sets where id = %s"
            val = (dataEntry["bookSetID"][i],)
            dbconnect.execute(sql, val)
            book_set_id = dbconnect.fetchone()[0]

            sql = "SELECT id from orders where customer_uuid = %s"
            val = (dataEntry["UUID"],)
            dbconnect.execute(sql, val)
            order_id = dbconnect.fetchone()[0]

            sql = "SELECT name from books_sets where id = %s"
            val = (dataEntry["bookSetID"][i],)
            dbconnect.execute(sql, val)
            name = dbconnect.fetchone()[0]
            type = "books_sets"

            sql = "INSERT IGNORE INTO order_items (order_id, book_set_id, name, type, created_at, updated_at) VALUES (%s, %s, %s, %s, %s, %s);"
            val = (
                order_id,
                book_set_id,
                name,
                type,
                datetime.datetime.now(),
                datetime.datetime.now(),
            )
            print("sql: ", sql)
            print("val: ", val)
            dbconnect.execute(sql, val)

    if "coachingServiceID" in dataEntry:
        for i in range(len(dataEntry["coachingServiceID"])):
            sql = "SELECT id from coaching_services where id = %s"
            val = (dataEntry["coachingServiceID"][i],)
            dbconnect.execute(sql, val)
            coaching_service_id = dbconnect.fetchone()[0]
            print("coaching_service_id: ", coaching_service_id)

            sql = "SELECT id from orders where customer_uuid = %s"
            val = (dataEntry["UUID"],)
            dbconnect.execute(sql, val)
            order_id = dbconnect.fetchone()[0]
            print("order_id: ", order_id)

            sql = "SELECT name from coaching_services where id = %s"
            val = (dataEntry["coachingServiceID"][i],)
            dbconnect.execute(sql, val)
            name = dbconnect.fetchone()[0]
            print("name: ", name)

            type = "coaching_services"

            sql = "INSERT IGNORE INTO order_items (order_id, coaching_service_id, name, type, created_at, updated_at) VALUES (%s, %s, %s, %s, %s, %s);"
            val = (
                order_id,
                coaching_service_id,
                name,
                type,
                datetime.datetime.now(),
                datetime.datetime.now(),
            )
            dbconnect.execute(sql, val)

mydb.commit()
