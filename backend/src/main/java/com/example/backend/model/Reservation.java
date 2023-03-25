package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
public class Reservation {

    @NonNull
    private String user;
    @NonNull
    private String event;
    @NonNull
    private LocalDateTime startTime;
    @NonNull
    private LocalDateTime endTime;

}
