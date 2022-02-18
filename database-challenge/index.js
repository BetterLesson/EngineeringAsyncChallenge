const data = require("./data.json");

const log = console.log;
// Create table scripts
log(`DROP TABLE IF EXISTS orders;
CREATE TABLE orders
(uuid varchar(255) NOT NULL PRIMARY KEY,
customer_name varchar(255) NULL,
cell_phone varchar(255) NULL,
email varchar(255) NULL,
address varchar(255) NULL,
order_total varchar(255) NULL,
order_date varchar(255) NULL,
discount_code varchar(255) NULL)`);

log(`DROP TABLE IF EXISTS coaching_services;
  CREATE TABLE coaching_services
  (uuid varchar(255) NOT NULL,
  coaching_service_id int NOT NULL PRIMARY KEY),
  FOREIGN KEY (uuid) REFERENCES orders(uuid)`);

log(`DROP TABLE IF EXISTS book_sets;
CREATE TABLE book_sets
(uuid varchar(255) NOT NULL,
book_set_id int NOT NULL PRIMARY KEY),
FOREIGN KEY (uuid) REFERENCES orders(uuid)`);

// Iterate through all records
data.map((record) => {
  const {
    UUID,
    customerName,
    cellPhone,
    email,
    address,
    coachingServiceID,
    bookSetID,
    orderTotal,
    orderDate,
    discountCode,
  } = record;
  // Insert into orders first
  log(
    `INSERT INTO orders(
      uuid,customer_name,cell_phone,email, address,order_total,order_date,discount_code) 
      VALUES(${UUID}, ${customerName}, ${cellPhone}, ${email}, ${address}, ${orderTotal}, ${orderDate}, ${discountCode})`
  );
  // If a coaching service id exist, insert it here
  if (coachingServiceID) {
    coachingServiceID.map((id) => {
      log(
        `INSERT INTO coaching_services(uuid,coaching_service_id) VALUES(${UUID}, ${id})`
      );
    });
  }
  // If a book set id exist, insert it here
  if (bookSetID) {
    bookSetID.map((id) => {
      log(`INSERT INTO book_sets(uuid,book_set_id) VALUES(${UUID},${id})`);
    });
  }
});
