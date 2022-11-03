package com.jeffgoyette.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.ZonedDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Reservation {

    private String user;
    private String event;
    private ZonedDateTime startTime;
    private ZonedDateTime endTime;

}
