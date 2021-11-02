package com.example.demo.reservation;

import org.springframework.stereotype.Service; 
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

@Service
public class ReservationService {
    private List<ReservationDTO> reservations;

    public ReservationService() {
        reservations = new ArrayList<ReservationDTO>();
        buildReservations();
    }
    public List<ReservationDTO> getReservations(String userId) {
        List<ReservationDTO> userReservationList = new ArrayList<ReservationDTO>(); 
        for(int i = 0; i < reservations.size(); i++) {
            if(reservations.get(i).getUsername().equals(userId) && reservations.get(i).getStartTime().isAfter(Instant.now())) {
                userReservationList.add(reservations.get(i));
            }
        }
        return userReservationList;
    }

    private void buildReservations() {
        Instant startTime = Instant.now().plus(1, ChronoUnit.DAYS);
        Instant endTime = startTime.plus(1, ChronoUnit.DAYS);
        for(int i = 0; i < 5; i++) {
            reservations.add(new ReservationDTO("user" + i, "Movie Night", startTime, endTime));
        }
        reservations.add(new ReservationDTO("user2", "Date Night", Instant.parse("2020-11-01T22:19:40.337Z"),Instant.parse("2020-11-02T22:19:40.337Z")));
    }


    public boolean addReservation(ReservationDTO reservationDTO) {
        if (hasReservationPassed(reservationDTO) && overlappingReservation(reservationDTO)) {
            reservations.add(reservationDTO);
            return true;
        }
        return false;
    }

    private boolean overlappingReservation(ReservationDTO reservationDTO) {
        for(int i = 0; i < reservations.size(); i++) {
            if(reservations.get(i).getUsername().equals(reservationDTO.getUsername())){
                if(reservationDTO.getStartTime().isBefore(reservations.get(i).getStartTime()) && reservationDTO.getEndTime().isAfter(reservations.get(i).getStartTime())) {
                    return false;
                }
                if(reservationDTO.getStartTime().isBefore(reservations.get(i).getEndTime()) && reservationDTO.getEndTime().isBefore(reservations.get(i).getEndTime())) {
                    return false;
                }
                if(reservationDTO.getStartTime().isBefore(reservations.get(i).getEndTime()) && reservationDTO.getEndTime().isAfter(reservations.get(i).getEndTime())) {
                    return false;
                }
            }
        }
        return true;
    }

    private boolean hasReservationPassed(ReservationDTO reservationDTO) {
        Instant now = Instant.now();
        return (reservationDTO.getStartTime().isAfter(now) && reservationDTO.getEndTime().isAfter(now));
    }
}
