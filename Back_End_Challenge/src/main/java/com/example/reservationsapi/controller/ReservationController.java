package com.example.reservationsapi.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.reservationsapi.model.Reservation;
import com.example.reservationsapi.service.ReservationService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/reservation")
@AllArgsConstructor
public class ReservationController {

    private final ReservationService reservationService;
    
    @GetMapping
    public ResponseEntity<List<Reservation>> getReservations(@RequestParam String user) {
        return new ResponseEntity<>(reservationService.getFutureReservations(user), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Reservation> createReservation(@RequestBody Reservation reservation) throws Exception {
        return new ResponseEntity<>(reservationService.createReservation(reservation), HttpStatus.CREATED);
    }
}
