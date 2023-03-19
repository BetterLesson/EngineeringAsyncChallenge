package org.example;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import java.io.FileNotFoundException;
import java.io.FileReader;

public class Main {
    public static void main(String[] args) {
        Gson inputGson=new Gson();

        try {
            //Update path to StartupOrderNoSQLDatabase.json if not running JAR
            JsonObject allOrders=inputGson.fromJson(new FileReader("StartupOrderNoSQLDatabase.json"), JsonObject.class);
            //begin extraction of .json
            JsonArray arrayOrders=allOrders.getAsJsonArray("Orders");

            for(int i=0; i<arrayOrders.size(); i++)
            {
                JsonObject eachOrder=arrayOrders.get(i).getAsJsonObject();

                int UUID=eachOrder.get("UUID").getAsInt();
                String customerName=eachOrder.get("CustomerName").getAsString();
                String cellPhone=eachOrder.get("CellPhone").getAsString();
                String email=eachOrder.get("Email").getAsString();
                String address=eachOrder.get("Address").getAsString();
                Object[] coachingServiceIDArray=eachOrder.get("CoachingServiceID").getAsJsonArray().asList().toArray();
                Object[] bookSetIDArray=eachOrder.get("BookSetID").getAsJsonArray().asList().toArray();
                double orderTotal=eachOrder.get("OrderTotal").getAsDouble();
                String orderDate=eachOrder.get("OrderDate").getAsString();
                String discountCode=eachOrder.get("DiscountCode").getAsString();

                //Print SQL statements to insert into new database
                System.out.printf("INSERT INTO Customer (CustomerID, Name, CellPhone, Email, Address) " +
                        "VALUES (%d, %s, %s, %s, %s);\n", i+1, customerName, cellPhone, email, address);
                System.out.printf("INSERT INTO Order (UUID, CustomerID, OrderTotal, OrderDate, DiscountCode) " +
                        "VALUES (%d, %d, %.2f, %s, %s);\n", UUID, i+1, orderTotal, orderDate, discountCode);

                for (Object o : coachingServiceIDArray) {
                    //issue with casting JsonPrimitives, avoiding issue by using toString() method
                    System.out.printf("INSERT INTO CoachingServiceOrdered (UUID, CoachingServiceID) " +
                            "VALUES (%d, %s);\n", UUID, o.toString());
                }

                for (Object ob : bookSetIDArray) {
                    //same issue as above
                    System.out.printf("INSERT INTO BookSetOrdered (UUID, BookSetID) " +
                            "VALUES (%d, %s);\n", UUID, ob.toString());
                }

                System.out.println();
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}