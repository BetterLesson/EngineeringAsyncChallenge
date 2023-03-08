package com.example.reservationsapi.service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.reservationsapi.exception.EventHasPassedException;
import com.example.reservationsapi.exception.EventOverlapsException;
import com.example.reservationsapi.model.Reservation;

@Service
public class ReservationService {
    
    private Map<String, List<Reservation>> userToReservations = new HashMap<>();

    public Reservation createReservation(Reservation reservation) throws Exception {
        if (reservation.getStartTime().isBefore(Instant.now()))
            throw new EventHasPassedException();
        if (overlapsExistingReservations(reservation))
            throw new EventOverlapsException();

        return save(reservation);
    }

    public List<Reservation> getFutureReservations(String user) {
        List<Reservation> reservations = userToReservations.getOrDefault(user, new ArrayList<>());

        return reservations.stream()
            .filter((reservation) -> reservation.getStartTime().isAfter(Instant.now()))
            .collect(Collectors.toList());
    }

    private boolean overlapsExistingReservations(Reservation newReservation) {
        String user = newReservation.getUser();
        List<Reservation> reservations = userToReservations.getOrDefault(user, new ArrayList<>());

        for (Reservation existingReservation : reservations) {
            if (overlaps(newReservation, existingReservation))
                return true;
        }

        return false;
    }

    // This method assumes that the endTime of a reservation is after the startTime
    private boolean overlaps(Reservation newReservation, Reservation existingReservation) {
        Instant newReservationStartTime = newReservation.getStartTime();
        Instant newReservationEndTime = newReservation.getEndTime();
        Instant existingReservationStartTime = existingReservation.getStartTime();
        Instant existingReservationEndTime = existingReservation.getEndTime();

        return !(newReservationEndTime.isBefore(existingReservationStartTime) ||
            newReservationStartTime.isAfter(existingReservationEndTime));
    }

    private Reservation save(Reservation reservation) {
        String user = reservation.getUser();

        if (userToReservations.containsKey(user)) {
            userToReservations.get(user).add(reservation);
        } else {
            List<Reservation> reservations = new ArrayList<>();
            reservations.add(reservation);
            userToReservations.put(user, reservations);
        }

        return reservation;
    }
}
