import argparse
import json
import uuid
parser = argparse.ArgumentParser()


def parse_dollar_string(dollar: str):
    """
    Converts a dollar value string to a float. e.g. "$1,899.11" to 1899.11
    :param dollar:
    :return:
    """
    output = dollar.replace('$', '')
    output = output.replace(',', '')

    return float(output)


class ObjectRepresentation:
    def attribute_str(self):
        output = ""
        for attribute, value in self.__dict__.items():
            output += f"{attribute},"

        return output[:-1]

    def __repr__(self):
        output = "("
        for attribute, value in self.__dict__.items():
            if isinstance(value, str):
                output += f"\'{value}\', "
            elif isinstance(value, list):
                arr = f"{value}"[1:]
                arr = arr[:-1]

                output += "'{" + arr + "}', "
            else:
                output += f"{value}, "

        output = output[:-2]
        output += ")"

        return output


class Customer(ObjectRepresentation):
    def __init__(self, data: dict):
        name = data.get("customerName")
        if name:
            split_names = name.split(" ")
            self.first_name = split_names[0]
            if len(split_names) > 1:
                self.last_name = split_names[1]
        self.cell_phone = data.get("cellPhone")
        self.email = data.get("email")
        self.address_id = None # Fill in once the address has been inserted as db creates UUIDs


class Order(ObjectRepresentation):
    def __init__(self, data: dict):
        self.uuid = data.get("UUID")
        self.coaching_service_ids = data.get("coachingServiceID")
        self.book_set_ids = data.get("bookSetID")
        self.order_total = parse_dollar_string(data.get("orderTotal"))
        self.order_date = data.get("orderDate")
        self.discount_code = data.get("discountCode")
        self.address_id = None # Fill in once the address has been inserted as db creates UUIDs


class Address(ObjectRepresentation):
    def __init__(self, data: dict):
        self.address = data.get("address")


def start_transaction():
    """
    Simply starts the transaction.
    """
    print("BEGIN;")


def commit_transaction():
    """
    Simply commits the transaction
    """
    print("COMMIT;")


def create_bulk_insert_statement(objects: list, tablename: str):
    if len(objects) == 0:
        return

    output = f"INSERT INTO {tablename}({objects[0].attribute_str()}) VALUES"
    for index, obj in enumerate(objects):
        output += repr(obj)
        if index + 1 < len(objects):
            output += ","

    output += " RETURNING uuid;"
    print(output)

    return mock_uuids(objects)


def add_fk_uuids(objects: list, fk_uuids: list, property_name: str):
    """
    :param objects: List of objects to parse
    :param fk_uuids: List of uuids to add to the list
    :param property_name: The property name e.g. address_id
    :return:
    """
    for obj, fk_uuid in zip(objects, fk_uuids):
        setattr(obj, property_name, fk_uuid)


def mock_uuids(objects):
    """
    Since we do not have the ids for customer & address and must get them from the DB let's mock what the inserts will return
    :param objects:
    :return: [uuids]
    """
    uuids = []
    for _ in objects:
        uuids.append(str(uuid.uuid1()))

    return uuids


def migrate(file: str):
    """
    :param file:
    :return: None
    """
    with open(file) as json_file:
        data = json.load(json_file)
        customers = []
        addresses = []
        orders = []
        for row in data:
            customers.append(Customer(row))
            addresses.append(Address(row))
            orders.append(Order(row))

        start_transaction()

        address_uuids = create_bulk_insert_statement(addresses, 'addresses')
        add_fk_uuids(customers, address_uuids, "address_id")
        add_fk_uuids(orders, address_uuids, "address_id")

        customer_uuids = create_bulk_insert_statement(customers, 'customers')

        add_fk_uuids(orders, customer_uuids, "customer_id")
        create_bulk_insert_statement(orders, 'orders')

        commit_transaction()


if __name__ == '__main__':
    parser.add_argument("-file", "--file", help="File name to run the migration on.", required=True)
    args = parser.parse_args()

    migrate(args.file)