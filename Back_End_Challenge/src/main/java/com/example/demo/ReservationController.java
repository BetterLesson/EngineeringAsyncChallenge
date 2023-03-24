package com.example.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/reservation")
public class ReservationController {
    private final List<EventReservation> reservations = new ArrayList<>();

    @PostMapping
    public ResponseEntity<String> createReservation(@RequestBody EventReservation reservation) {
        LocalDateTime now = LocalDateTime.now();

        if (reservation.getStartTime().isBefore(now)) {
            return new ResponseEntity<>("Event start time has already passed.", HttpStatus.BAD_REQUEST);
        }

        boolean hasOverlap = reservations.stream()
                .anyMatch(existingReservation ->
                        reservation.getUser().equals(existingReservation.getUser()) &&
                                reservation.getStartTime().isBefore(existingReservation.getEndTime()) &&
                                reservation.getEndTime().isAfter(existingReservation.getStartTime())
                );

        if (hasOverlap) {
            return new ResponseEntity<>("Event reservation overlaps with an existing reservation.", HttpStatus.CONFLICT);
        }

        reservations.add(reservation);
        return new ResponseEntity<>("Event reservation created.", HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<EventReservation>> getAllFutureReservations(@RequestParam String user) {
        LocalDateTime now = LocalDateTime.now();
        List<EventReservation> futureReservations = reservations.stream()
                .filter(reservation -> reservation.getUser().equals(user) && reservation.getStartTime().isAfter(now))
                .collect(Collectors.toList());

        return ResponseEntity.ok(futureReservations);
    }
}
