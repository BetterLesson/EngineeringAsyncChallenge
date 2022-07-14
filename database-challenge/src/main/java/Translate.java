import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.*;

public class Translate {

    public static void main(String[] args){
        if(args.length < 1){
            System.out.println("Using default order-sample.json as test. A different file can be specified as an argument.");
        }

        File file = new File(args.length < 1 ? "classes/order-sample.json": args[0]);
        Gson gson = new GsonBuilder().setPrettyPrinting().create();

        try {
            Order order = gson.fromJson(new FileReader(file), Order.class);
            System.out.println(order.toString());
            System.out.println("---------------------------------------------");

            StringBuilder orderInvoiceBuilder = new StringBuilder()
                    .append("INSERT INTO ").append("OrderInvoice ")
                    .append("VALUES (")
                    .append(order.UUID).append(", ")
                    .append(order.customerName).append(", ")
                    .append(order.cellPhone).append(", ")
                    .append(order.email).append(", ")
                    .append(order.address).append(", ")
                    .append(order.orderTotal).append(", ")
                    .append(order.orderDate).append(", ")
                    .append(order.discountCode)
                    .append(");");
            send(orderInvoiceBuilder);

            for (int id : order.getCoachingServiceId()) {
                StringBuilder coachingServiceBuilder = new StringBuilder()
                        .append("INSERT INTO ").append("CoachingService ")
                        .append("VALUES (")
                        .append(id).append(", ")
                        .append(order.UUID)
                        .append(");");

                send(coachingServiceBuilder);
            }

            for (int id : order.getBookSetId()) {
                StringBuilder bookSetBuilder = new StringBuilder()
                        .append("INSERT INTO ").append("BookSet ")
                        .append("VALUES (")
                        .append(id).append(", ")
                        .append(order.UUID)
                        .append(");");

                send(bookSetBuilder);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    private static void send(StringBuilder builder) {
        builder.append("\n");
        System.out.println(builder);
    }
}
