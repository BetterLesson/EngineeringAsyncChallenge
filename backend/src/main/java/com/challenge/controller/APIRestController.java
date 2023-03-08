package com.challenge.controller;

import com.challenge.exceptions.InvalidStartTimeException;
import com.challenge.exceptions.OverlappingTimeException;
import com.challenge.models.Reservation;
import org.springframework.web.bind.annotation.*;

import javax.management.InvalidAttributeValueException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class APIRestController {

    List<Reservation> reservationList = new ArrayList<>();

    @GetMapping("/reservation")
    @ResponseBody
    public List<Reservation> getReservation(@RequestParam String user){
        List<Reservation> reservationsForUser = new ArrayList<>();
        for (Reservation reservation : reservationList) {
            if (reservation.getUser().equals(user) && reservation.getStartTime().isAfter(LocalDateTime.now())){
                reservationsForUser.add(reservation);
            }
        }
        return reservationsForUser;
    }

    @PostMapping("/reservation")
    public String postReservation(@RequestBody Reservation reservation) throws InvalidAttributeValueException {
        String request = "Received POST request with " + reservation.toString();

        if (reservation.getStartTime().isBefore(LocalDateTime.now())){
            throw new InvalidStartTimeException("Start time has already passed!");
        }

        if (reservation.getEndTime().isBefore(reservation.getStartTime())){
            throw new InvalidStartTimeException("End time is before Start time!");
        }

        for (Reservation existingRes : reservationList) {
            if (existingRes.getUser().equals(reservation.getUser())){
                boolean isOverlapping = isOverlapping(existingRes.getStartTime(), existingRes.getEndTime(), reservation.getStartTime(), reservation.getEndTime());
                if (isOverlapping){
                    throw new OverlappingTimeException("This reservation timing overlaps an existing reservation: " + reservation.toString());
                }
            }
        }


        reservationList.add(reservation);
        return request;
    }

    public static boolean isOverlapping(LocalDateTime start1, LocalDateTime end1, LocalDateTime start2, LocalDateTime end2) {
        return start1.isBefore(end2) && start2.isBefore(end1);
    }

}