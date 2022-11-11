import numpy as np
import pandas as pd
from dateutil import parser


df = pd.read_json("../data.json")
df = df.explode("coachingServiceID").explode("bookSetID")

df['orderDate'] = pd.to_datetime(df['orderDate'])

# Changing orderDate to a SQL Friendly Datetime Format
df['orderDate'] = pd.to_datetime(df['orderDate'],utc=True).dt.tz_localize(None)


# Changing OrderTotal to Float
df['orderTotal'] = df['orderTotal'].replace('\$|,', '', regex=True).astype(float)

# Splitting out First and Last Name
df[["FirstName", "LastName"]] = df["customerName"].str.split(expand=True)


def format_address(df, address_col):
    address = df[address_col].str.split(expand=True)
    address['street'] = address[0] + " " + address[1] + " " + address[2]
    address.drop([0, 1, 2], axis=1, inplace=True)

    df['Street'] = address['street'].str.replace(",", "")
    df['City'] = address[3]
    df['State'] = address[4]
    df['Zip'] = address[5]
    df['City'] = df['City'].str.replace(",", "")
    df['State'] = df['State'].str.replace(",", "")
    df['Zip'] = df['Zip'].str.replace(",", "")

    return df

df = format_address(df, 'address')


def insert_into_db(df, id_col):

    unique_orders = list(df['UUID'].unique())

    for order in unique_orders:
        z = df[df[id_col] == order]
        first_name = z.head(1)['FirstName'].item()
        last_name = z.head(1)['LastName'].item()
        cell = z.head(1)['cellPhone'].item()
        email = z.head(1)['email'].item()
        street = z.head(1)['Street'].item()
        city = z.head(1)['City'].item()
        state = z.head(1)['State'].item()
        zipcode = z.head(1)['Zip'].item()
        print(
            f"INSERT INTO Customers (FirstName, LastName, Cell, Email, Street, City, State, ZipCode) VALUES ({first_name}, {last_name}, {cell}, {email}, {street}, {city}, {state}, {zipcode});")

        ordertotal = z.head(1)['orderTotal'].item()
        orderdate = z.head(1)['orderDate'].item()
        discountcode = z.head(1)['discountCode'].item()

        print(
            f"INSERT INTO Orders (OrderTotal, OrderDate, DiscountCode) VALUES ({ordertotal}, {orderdate}, {discountcode});")

        for bookid in z['bookSetID']:
            if z['bookSetID'].isnull().sum() <1:
                print(f"INSERT INTO OrderItems (ProductID, ProductType) VALUES ({bookid}, 'Book');")
        for lessonid in z['coachingServiceID']:
            if z['coachingServiceID'].isnull().sum() < 1:
                print(f"INSERT INTO OrderItems (ProductID, ProductType) VALUES ({lessonid}, 'Lesson');")

insert_into_db(df, 'UUID')
