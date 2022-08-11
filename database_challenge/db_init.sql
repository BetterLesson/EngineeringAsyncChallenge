-- For a PSQL db. Based off of version 14
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Created a separate table for addresses because a user can have a billing address and a shipping address
-- The dataset does not specify which the address is so I left it generic
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


create table addresses(
    uuid uuid unique NOT NULL DEFAULT uuid_generate_v1(),
    address varchar(255)
);

create table customers (
    uuid uuid unique NOT NULL DEFAULT uuid_generate_v1(),
    first_name varchar(255),
    last_name varchar(255),
    cell_phone varchar(50),
    email varchar(255),
    address_id uuid,
    CONSTRAINT fk_address
        foreign key(address_id)
                      references addresses(uuid)
);

-- Ideally each item of the book_set & coaching_service would be in a separate table order_item that points to the
-- order with a fk constraint on the order_uuid. Since there aren't any book_set objects or coaching_service objects defined in this
-- dataset I'm going to use an array to store them.
create table orders (
    uuid uuid unique NOT NULL DEFAULT uuid_generate_v1(),
    coaching_service_ids int[],
    book_set_ids int[],
    order_total numeric,
    order_date timestamptz not null default now(),
    discount_code varchar(50),
    customer_id uuid,
    address_id uuid,
    CONSTRAINT fk_address
        foreign key(address_id)
                      references addresses(uuid),
    CONSTRAINT fk_customer
        foreign key(customer_id)
                      references customers(uuid)

);