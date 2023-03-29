class ItemType:
    class_counter = 0

    def __init__(self, name_of_item):
        self.id = self.class_counter
        self.name_of_item = name_of_item
        ItemType.class_counter += 1

    def insert(self):
        return f"INSERT INTO ItemType (id, name_of_item) VALUES ({self.id}, '{self.name_of_item}');"


class PurchaseItem:
    class_counter = 0

    def __init__(self, item_id, original_id):
        self.id = self.class_counter
        self.item_id = item_id
        self.original_id = original_id
        PurchaseItem.class_counter += 1

    def insert(self):
        return f"INSERT INTO PurchaseItem (id, item_id, original_id) VALUES ({self.id}, '{self.item_id}', " \
               f"'{self.original_id}');"


class Customer:
    class_counter = 0

    def __init__(self, name, contact_info):
        self.id = self.class_counter
        self.name = name
        self.contact_info = contact_info
        Customer.class_counter += 1

    def insert(self):
        return f"INSERT INTO Customer (id, name, contact_info) VALUES ({self.id}, '{self.name}', " \
               f"'{self.contact_info}');"


class Orders:
    class_counter = 0

    def __init__(self, order_date, order_total, discount_code, customer_id, purchase_item):
        self.id = self.class_counter
        self.order_date = order_date
        self.order_total = order_total
        self.discount_code = discount_code
        self.customer_id = customer_id
        self.purchase_item = purchase_item
        Orders.class_counter += 1

    def insert(self):
        return f"INSERT INTO Orders (id, order_date, order_total, discount_code, customer_id, purchase_item) VALUES " \
               f"({self.id}, '{self.order_total}', '{self.order_total}', {self.discount_code}, '{self.customer_id}'," \
               f" '{self.purchase_item}');"


class CoachingService:
    class_counter = 0

    def __init__(self, contact_info, coaching_ids):
        self.id = self.class_counter
        self.contact_info = contact_info
        self.coaching_ids = coaching_ids
        CoachingService.class_counter += 1

    def insert(self):
        return f"INSERT INTO CoachingService (id, contact_info, coaching_ids) VALUES ({self.id}," \
               f"'{self.contact_info}', '{self.coaching_ids}');"


class BookSet:
    class_counter = 0

    def __init__(self, book_ids):
        self.id = self.class_counter
        self.book_ids = book_ids
        BookSet.class_counter += 1

    def insert(self):
        return f"INSERT INTO BookSet (id, book_ids) VALUES ('{self.id}', '{self.book_ids}');"


class ContactInfo:
    class_counter = 0

    def __init__(self, address, email, phone):
        self.id = self.class_counter
        self.address = address
        self.email = email
        self.phone = phone
        ContactInfo.class_counter += 1

    def insert(self):
        return f"INSERT INTO ContactInfo (id, address, email, phone) VALUES ({self.id}, '{self.address}', " \
               f"'{self.email}', '{self.phone}');"
