package com.example.reservationsapi.model;

import java.time.Instant;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Reservation {
    
    private String user;
    private String event;
    private Instant startTime;
    private Instant endTime;
}
