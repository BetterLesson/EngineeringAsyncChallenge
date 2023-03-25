package com.example.backend.controller;

import com.example.backend.model.ErrorMessage;
import com.example.backend.model.Reservation;
import com.example.backend.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

@Controller
public class ReservationController {

    private final ReservationService reservationService;

    @Autowired
    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    // provides GET functionality for reservation endpoint; can optionally take a username to only retrieve
    // reservations specific to the user
    @GetMapping("/reservation")
    public ResponseEntity<List<Reservation>> getReservation(@RequestParam("user") Optional<String> username) {
        List<Reservation> reservations;

        if (username.isEmpty()) {
            reservations = reservationService.getAllReservations();
        } else {
            reservations = reservationService.getReservationsByUsername(username.get());
        }

        return new ResponseEntity<>(reservations, HttpStatus.OK);
    }

    // provides POST functionality for reservation endpoint; may return the created reservation
    // or may return an error message with specific details on what went wrong with creation
    @PostMapping("/reservation")
    public ResponseEntity<?> createReservation(@RequestBody @Validated Reservation reservation) {

        try {
            reservationService.createReservation(reservation);
            return new ResponseEntity<>(reservation, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            ErrorMessage errorMessage = new ErrorMessage(e.getMessage());
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }

    }

}
