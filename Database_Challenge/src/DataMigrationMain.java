import java.io.FileReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class DataMigrationMain {
    static class Order {
        private String uuid;
        private Customer customer;
        private double orderTotal;
        private String orderDate;
        private String discountCode;
        private int[] coachingServiceID;
        private int[] bookSetID;
        public String getUuid() {
            return uuid;
        }
        public void setUuid(String uuid) {
            this.uuid = uuid;
        }
        public Customer getCustomer() {
            return customer;
        }
        public void setCustomer(Customer customer) {
            this.customer = customer;
        }
        public double getOrderTotal() {
            return orderTotal;
        }
        public void setOrderTotal(double orderTotal) {
            this.orderTotal = orderTotal;
        }
        public String getOrderDate() {
            return orderDate;
        }
        public void setOrderDate(String orderDate) {
            this.orderDate = orderDate;
        }
        public String getDiscountCode() {
            return discountCode;
        }
        public void setDiscountCode(String discountCode) {
            this.discountCode = discountCode;
        }
        public int[] getCoachingServiceID() {
            return coachingServiceID;
        }
        public void setCoachingServiceID(int[] coachingServiceID) {
            this.coachingServiceID = coachingServiceID;
        }
        public int[] getBookSetID() {
            return bookSetID;
        }
        public void setBookSetID(int[] bookSetID) {
            this.bookSetID = bookSetID;
        }
        @Override
        public String toString() {
            return "Order{" +
                    "uuid=" + uuid +
                    ", customer=" + customer +
                    ", orderTotal=" + orderTotal +
                    ", orderDate='" + orderDate + '\'' +
                    ", discountCode='" + discountCode + '\'' +
                    ", coachingServiceID=" + Arrays.toString(coachingServiceID) +
                    ", bookSetID=" + Arrays.toString(bookSetID) +
                    '}';
        }
    }
    static class Customer {
        private int customerID;
        private String customerName;
        private String cellPhone;
        private String email;
        private String address;
        public int getCustomerID() {
            return customerID;
        }
        public void setCustomerID(int customerID) {
            this.customerID = customerID;
        }
        public String getCustomerName() {
            return customerName;
        }
        public void setCustomerName(String customerName) {
            this.customerName = customerName;
        }
        public String getCellPhone() {
            return cellPhone;
        }
        public void setCellPhone(String cellPhone) {
            this.cellPhone = cellPhone;
        }
        public String getEmail() {
            return email;
        }
        public void setEmail(String email) {
            this.email = email;
        }
        public String getAddress() {
            return address;
        }

        public void setAddress(String address) {
            this.address = address;
        }
        @Override
        public String toString() {
            return "Customer{" +
                    "customerID=" + customerID +
                    ", customerName='" + customerName + '\'' +
                    ", cellPhone='" + cellPhone + '\'' +
                    ", email='" + email + '\'' +
                    ", address='" + address + '\'' +
                    '}';
        }
    }

    /**
     * Reads in the old NoSQL database records from a JSON file and converts them into a List of Order objects.
     *
     * @param fileName a String representing the name of the JSON file containing the old database records
     * @return a List of Order objects containing the data from the old NoSQL database
     */
    private static List<Order> readOldDBRecords(String fileName) {
        List<Order> orders = new ArrayList<>();
        JSONParser parser = new JSONParser();
        try {
            JSONArray records = (JSONArray) parser.parse(new FileReader(fileName));
            for (Object record : records) {
                JSONObject jsonRecord = (JSONObject) record;

                Order order = new Order();
                order.setUuid(jsonRecord.get("UUID").toString());
                order.setOrderTotal(Double.parseDouble(jsonRecord.get("orderTotal").toString().replaceAll("[^\\d.]", ""))); // remove non-numeric characters
                order.setOrderDate(jsonRecord.get("orderDate").toString());
                order.setDiscountCode(jsonRecord.get("discountCode").toString());
                JSONArray coachingServiceIDJsonArray = (JSONArray) jsonRecord.get("coachingServiceID");
                if (coachingServiceIDJsonArray != null) {
                    order.setCoachingServiceID(convertToIntArray(coachingServiceIDJsonArray));
                } else {
                    order.setCoachingServiceID(null);
                }
                JSONArray BookSetIDJsonArray = (JSONArray) jsonRecord.get("bookSetID");
                if (BookSetIDJsonArray != null) {
                    order.setBookSetID(convertToIntArray(BookSetIDJsonArray));
                } else {
                    order.setBookSetID(null);
                }

                Customer customer = new Customer();
                customer.setCustomerName(jsonRecord.get("customerName").toString());
                customer.setCellPhone(jsonRecord.get("cellPhone").toString());
                customer.setEmail(jsonRecord.get("email").toString());
                customer.setAddress(jsonRecord.get("address").toString());
                order.setCustomer(customer);
                orders.add(order);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return orders;
    }

    /**
     * Converts a JSONArray of integer values to an integer array.
     *
     * @param jsonArray a JSONArray of integer values to be converted
     * @return an integer array containing the converted integer values from the input JSONArray
     */
    private static int[] convertToIntArray(JSONArray jsonArray) {
        int[] intArray = new int[jsonArray.size()];
        for (int i = 0; i < jsonArray.size(); i++) {
            intArray[i] = Integer.parseInt(jsonArray.get(i).toString());
        }
        return intArray;
    }

    /**
     * Prints the SQL statements for inserting Order data into the new relational database schema.
     * The method iterates over the provided list of orders and outputs the SQL statements for each order
     * and its associated data, such as the Customer, Order_CoachingService, and Order_BookSet records.
     *
     * @param orders A list of Order objects containing the data to be inserted into the database.
     */
    private static void printSQLStatement(List<Order> orders) {
        int recordNumber = 0;
        for (Order order : orders) {
            System.out.println("--- Record" + ++recordNumber +" ---");
            // print Customer SQL statement
            String customerSql = "INSERT INTO Customer (CustomerID, CustomerName, CellPhone, Email, Address) VALUES (" +
                    order.getCustomer().getCustomerID() + ", '" + order.getCustomer().getCustomerName() +
                    "', '" + order.getCustomer().getCellPhone() + "', '" + order.getCustomer().getEmail() +
                    "', '" + order.getCustomer().getAddress() + "');";
            System.out.println(customerSql);

            // print Order SQL statement
            String orderSql = "INSERT INTO Order (UUID, CustomerID, OrderTotal, OrderDate, DiscountCode) VALUES ('" +
                    order.getUuid() + "', " + order.getCustomer().getCustomerID() + ", " + order.getOrderTotal() +
                    ", '" + order.getOrderDate() + "', '" + order.getDiscountCode() + "');";
            System.out.println(orderSql);

            // print Order_CoachingService SQL statements
            int[] coachingServiceIDs = order.getCoachingServiceID();
            if (coachingServiceIDs != null && coachingServiceIDs.length > 0) {
                for (int serviceID : coachingServiceIDs) {
                    String serviceSql = "INSERT INTO Order_CoachingService (UUID, CoachingServiceID) VALUES ('" +
                            order.getUuid() + "', " + serviceID + ");";
                    System.out.println(serviceSql);
                }
            }

            // Print Order_BookSet SQL statements
            int[] bookSetIDs = order.getBookSetID();
            if (bookSetIDs != null && bookSetIDs.length > 0) {
                for (int bookSetID : bookSetIDs) {
                    String bookSetSql = "INSERT INTO Order_BookSet (UUID, BookSetID) VALUES ('" +
                            order.getUuid() + "', " + bookSetID + ");";
                    System.out.println(bookSetSql);
                }
            }
        }
    }


    public static void main(String[] args) {
        String oldDBFile;
        List<Order> orders;
        try {
            oldDBFile = "data.json"; // path to old database file
            orders= readOldDBRecords(oldDBFile);
//            for (Order order : orders) {
//                System.out.println(order);
//            }
            printSQLStatement(orders);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}