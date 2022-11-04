package com.jeffgoyette.database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class DatabaseApplication implements CommandLineRunner {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private CustomerAddressRepository customerAddressRepository;

    @Autowired
    private CustomerContactRepository customerContactRepository;

    @Autowired
    private OrderRepository orderRepository;

    public static void main(String[] args) {
        SpringApplication.run(DatabaseApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        // Use mock data to insert
        OrderNoSQL example = OrderNoSQL.builder()
                .uuid(12345678L)
                .cellPhone("405.867.5309")
                .customerName("Jane Doe")
                .email("jane_teacher@gmail.com")
                .address("123 School Way, Dallas TX 75001")
                .coachingServiceId(List.of(1L, 2L, 3L))
                .bookSetId(List.of(10000L))
                .orderTotal(1000.0)
                .orderDate("12/25/22T23:00:05Z")
                .discountCode("CHEAP").build();

        Customer insertedCustomer = customerRepository.save(Customer.builder().id(example.getUuid()).name(example.getCustomerName()).build());

        customerAddressRepository.save(CustomerAddress.builder().address(example.getAddress()).customer(insertedCustomer).build());
        customerContactRepository.save(CustomerContact.builder().customer(insertedCustomer).email(example.getEmail()).phone(example.getCellPhone()).build());
        orderRepository.save(Order.builder()
                .id(example.getUuid())
                .orderDate(example.getOrderDate())
                .orderTotal(example.getOrderTotal())
                .bookSetId(example.getBookSetId())
                .coachingServiceId(example.getCoachingServiceId())
                .discountCode(example.getDiscountCode())
                .build());
    }
}
