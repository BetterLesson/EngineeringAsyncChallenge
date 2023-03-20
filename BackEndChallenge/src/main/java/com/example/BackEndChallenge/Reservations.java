package com.example.BackEndChallenge;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class Reservations {
    private List<Reservation> reservationList=new ArrayList<>();

    public void addReservation(Reservation reservation){
        ZonedDateTime current=ZonedDateTime.now();
        ZonedDateTime reservationStart=ZonedDateTime.parse(reservation.getStartTime());
        ZonedDateTime reservationEnd=ZonedDateTime.parse(reservation.getEndTime());

        //checking if local time is beyond the start time of event
        if(reservationStart.isBefore(current)){
            throw new RuntimeException("Event start time has passed current time.");
        }

        //checking for overlapping reservations
        for(Reservation existingReservation:reservationList){
            ZonedDateTime existingReservationStart=ZonedDateTime.parse(existingReservation.getStartTime());
            ZonedDateTime existingReservationEnd=ZonedDateTime.parse(existingReservation.getEndTime());

            if(existingReservation.getUser().equals(reservation.getUser())){
                if(reservationStart.isBefore(existingReservationEnd) && reservationEnd.isAfter(existingReservationStart)){
                    throw new RuntimeException("Event overlaps with another event for this user.");
                }
            }
        }
        reservationList.add(reservation);
    }

    public List<Reservation> getReservationList(String user){
        List<Reservation> userReservations=new ArrayList<>();

        //adding to list with matching reservations
        for(Reservation reservation:reservationList){
            if(reservation.getUser().equals(user)){
                userReservations.add(reservation);
            } else{
                throw new RuntimeException("User does not exist.");
            }
        }
        return userReservations;
    }
}
