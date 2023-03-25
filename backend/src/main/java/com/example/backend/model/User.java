package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class User {

    private String username;
    private List<Reservation> reservations;

    @Bean
    public List<User> userList() {
        // create a user list to test reservation endpoint functionality instead of saving user data to db
        return new ArrayList<>();
    }

}
