package com.example.backend.service;

import com.example.backend.model.Reservation;
import com.example.backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class ReservationService {

    private final List<User> userList;

    @Autowired
    public ReservationService(List<User> userList) {
        this.userList = userList;
    }

    // return all existing reservations from all current users
    public List<Reservation> getAllReservations() {
        List<Reservation> reservations = new ArrayList<>();

        for (User user : userList) {
            reservations.addAll(user.getReservations());
        }

        return reservations;
    }

    // only return reservations made under a specific username
    public List<Reservation> getReservationsByUsername(String username) {
        User user = findUserByName(username);
        return user.getReservations();
    }

    // create a new reservation object
    public void createReservation(Reservation reservation) throws IllegalArgumentException {
        User user = findUserByName(reservation.getUser());

        // validate reservation against possible conflicts
        if (!isValidTimeframe(reservation.getStartTime(), reservation.getEndTime())) {
            throw new IllegalArgumentException("Event ends before it starts");
        }

        if (!isFutureDate(reservation.getStartTime())) {
            throw new IllegalArgumentException("Start date has already passed");
        }

        if (!canAddToSchedule(user, reservation)) {
            throw new IllegalArgumentException("Reservation conflicts with existing schedule");
        }

        user.getReservations().add(reservation);
    }

    // retrieve the user object related to a reservation based on provided username or create a new user
    private User findUserByName(String username) {
        for (User user : userList) {
            if (user.getUsername().equals(username)) {
                return user;
            }
        }

        // user for this reservation does not exist yet; for ease of API testing, just create a new user
        // for now, but in production it wouldn't generally make sense to create a reservation before a user
        User user = new User(username, new ArrayList<>());
        userList.add(user);
        return user;
    }

    // ensure the reservation doesn't end before it starts
    private boolean isValidTimeframe(LocalDateTime startTime, LocalDateTime endTime) {
        return endTime.isAfter(startTime);
    }

    // ensure the event date hasn't already passed
    private boolean isFutureDate(LocalDateTime reservationDate) {
        return reservationDate.isAfter(LocalDateTime.now());
    }

    // ensure a new reservation would fit into a user's existing schedule
    private boolean canAddToSchedule(User user, Reservation reservation) {
        List<Reservation> existingReservations = user.getReservations();
        LocalDateTime start = reservation.getStartTime();
        LocalDateTime end = reservation.getEndTime();

        // check the new reservation against each existing reservation time to determine any conflicts
        for (Reservation existingRes : existingReservations) {
            LocalDateTime existingStart = existingRes.getStartTime();
            LocalDateTime existingEnd = existingRes.getEndTime();

            if ((start.isEqual(existingStart)) || (end.isEqual(existingEnd)) ||
                    (start.isAfter(existingStart) && start.isBefore(existingEnd)) ||
                    (end.isAfter(existingStart) && end.isBefore(existingEnd))) {
                return false;
            }
        }

        return true;
    }

}
