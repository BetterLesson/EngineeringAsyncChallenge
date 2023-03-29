import json
from models import Orders, CoachingService, Customer, ContactInfo, PurchaseItem, ItemType, BookSet

# define constants to avoid magic strings
UIUD = "UUID"
CUSTOMER_NAME = "customerName"
CELL_PHONE = "cellPhone"
EMAIL = "email"
ADDRESS = "address"
COACHING_SERVICE_ID = "coachingServiceID"
BOOK_SET_ID = "bookSetID"
ORDER_TOTAL = "orderTotal"
BOOKS = "books"
COACHING = "coaching"
BOTH = "both"
ORDER_DATE = "orderDate"
DISCOUNT_CODE = "discountCode"


def parse_old_records(records: json):
    for record in records:
        uuid = record[UIUD]
        name = record[CUSTOMER_NAME]
        phone = record[CELL_PHONE]
        email = record[EMAIL]
        address = record[ADDRESS]
        contact_info = ContactInfo(address, email, phone)
        contact_info.insert()
        if COACHING_SERVICE_ID in record and BOOK_SET_ID in record:
            customer_ids = record[COACHING_SERVICE_ID]
            coaching_service = CoachingService(contact_info.id, customer_ids)
            print(coaching_service.insert())
            item_type = ItemType(BOTH)
            print(item_type.insert())
            book_ids = record[BOOK_SET_ID]
            books = BookSet(book_ids)
            print(books.insert())
        elif COACHING_SERVICE_ID in record:
            customer_ids = record[COACHING_SERVICE_ID]
            coaching_service = CoachingService(contact_info.id, customer_ids)
            print(coaching_service.insert())
            item_type = ItemType(COACHING)
            print(item_type.insert())
        # assume for the sake of this take home that there will always be book or coaching sold
        else:
            book_ids = record[BOOK_SET_ID]
            books = BookSet(book_ids)
            print(books.insert())
            item_type = ItemType(BOOKS)
            print(item_type.insert())
        order_total = record[ORDER_TOTAL]
        order_date = record[ORDER_DATE]
        discount_code = record[DISCOUNT_CODE]
        customer = Customer(name, contact_info.id)
        print(customer.insert())
        purchase_item = PurchaseItem(item_type.id, uuid)
        print(purchase_item.insert())
        order = Orders(order_date, order_total, discount_code, customer.id, purchase_item.id)
        print(order.insert())


if __name__ == '__main__':
    with open('data.json') as f:
        records = json.load(f)
    parse_old_records(records)
