import json
from typing import Any, Dict

field_names = [
    "UUID",
    "Customer Name",
    "Cell Phone",
    "Email",
    "Address",
    "Coaching Service ID",
    "Book Set ID",
    "Order Total",
    "Order Date",
    "Discount Code",
]


def line_to_query(row: str) -> None:
    try:
        jsonified = json.loads(row)
        if all(field in jsonified for field in field_names):
            print_json_to_query(jsonified)
    except ValueError:
        print(f"Error parsing: {row}")


def print_json_to_query(data: Dict[str, Any]) -> None:
    name = ", ".join(
        [
            f.replace(" ", "_")
            for f in field_names
            if f not in ["Coaching Service ID", "Book Set ID"]
        ]
    )
    print(f"INSERT INTO Startup_Order ({name}) VALUES ({insert_values(data)});")

    for coaching in data["Coaching Service ID"]:
        print(
            f"INSERT INTO Startup_Order_Coaching_Service_ID (UUID, Coaching_Service_ID) VALUES ({data['UUID']}, {coaching});"
        )

    for book_set in data["Book Set ID"]:
        print(
            f"INSERT INTO Startup_Order_Book_Set_ID (UUID, Book_Set_ID) VALUES ({data['UUID']}, {book_set});"
        )


def insert_values(data: Dict[str, Any]) -> str:
    result = []
    for name in field_names:
        if name not in ["Coaching Service Id", "Book Set ID"]:
            result.append(f'"{data[name]}"')

    return ", ".join(result)


if __name__ == "__main__":
    try:
        with open("db.txt", "r") as file:
            line: str = file.read()
            print(line_to_query(line))
    except (FileNotFoundError, IsADirectoryError, Exception) as e:
        exit(str(e))
