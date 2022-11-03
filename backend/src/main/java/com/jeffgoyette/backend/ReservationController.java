package com.jeffgoyette.backend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
public class ReservationController {

    private List<Reservation> reservations = new ArrayList<>();

    @PostMapping("/reservation")
    public ResponseEntity<ReservationResponse> createReservation(@RequestBody Reservation reservation) {
        if(reservation.getStartTime().isBefore(ZonedDateTime.now())) {
            return ResponseEntity.status(400).body(ReservationResponse.builder().reservation(reservation).message("Start time is before current time").build());
        } else if(isOverlapping(reservation)) {
            return ResponseEntity.status(400).body(ReservationResponse.builder().reservation(reservation).message("Overlaps with another registration").build());
        } else {
            reservations.add(reservation);
        }
        return ResponseEntity.ok(ReservationResponse.builder().message("Success!").reservation(reservation).build());
    }

    @GetMapping("/reservation")
    public ResponseEntity<List<Reservation>> getReservations() {
        return ResponseEntity.ok(findFutureReservations());
    }

    public List<Reservation> findFutureReservations() {
        List<Reservation> futureReservations = new ArrayList<>();
        for (Reservation reservation : reservations) {
            if(reservation.getStartTime().isAfter(ZonedDateTime.now())) {
                futureReservations.add(reservation);
            }
        }
        return  futureReservations;
    }

    private boolean isOverlapping(Reservation reservation) {
        boolean overlapping = false;

        for (Reservation existingReservation : reservations) {
            System.out.println("Existing reservation: start" + reservation.getStartTime().toString() + " end" + reservation.getEndTime());
            if(
                    // Between
                    (
                            (reservation.getStartTime().isAfter(existingReservation.getStartTime()) || reservation.getStartTime().isEqual(existingReservation.getStartTime()))
                                    &&
                                    (reservation.getEndTime().isBefore(existingReservation.getEndTime()) || reservation.getEndTime().isEqual(existingReservation.getEndTime()))
                    )
                    // End overlap
                    // Start overlap
            ) {
                overlapping = true;
            }
        }

        return overlapping;
    }

}
