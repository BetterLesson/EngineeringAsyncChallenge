package com.example.demo.reservation;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired; 

@RestController
@RequestMapping("/api/v1")
public class ReservationRestController {

    @Autowired
    private ReservationService reservationService;

    @GetMapping("/reservation/{userId}")
    public ResponseEntity getUserReservations(@PathVariable String userId) { 
        try {
            return ResponseEntity.ok(reservationService.getReservations(userId)); 
        }
        catch(Exception ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

    @PostMapping("/reservation")
    public ResponseEntity createReservation(@RequestBody ReservationDTO reservationDTO) {
        try{
            if (reservationService.addReservation(reservationDTO)) {
                return ResponseEntity.ok().body("Successfully added reservation!");
            }
            return ResponseEntity.badRequest().body("Reservation occurs in the past or overlaps with existing one. Please adjust and try again.");
        }
        catch (Exception ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

}

