package com.example.demo.reservation; 

import lombok.Data; 
import lombok.AllArgsConstructor; 
import lombok.NoArgsConstructor;

import java.time.Instant;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ReservationDTO {

    private String username;
    private String event; 
    private Instant startTime;
    private Instant endTime;

}