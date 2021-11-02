package com.example.demo;

import com.example.demo.reservation.ReservationDTO;
import com.example.demo.reservation.ReservationService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.Instant;
import java.util.List;

@SpringBootTest
public class ReservationServiceTest {

    private ReservationService reservationService = new ReservationService();

    @Test
    void testSuccessfulReservation() {
        String startTime = "2022-11-01T22:19:40.337Z";
        String endTime = "2022-11-02T22:19:40.337Z";
        reservationService.addReservation(new ReservationDTO("one1", "Test", Instant.parse(startTime) , Instant.parse(endTime)));
        List<ReservationDTO> reservations = reservationService.getReservations("one1");
        Assertions.assertTrue(reservations.size() == 2);
    }

    @Test
    void testReservationInThePast() {
        String startTime = "2020-11-01T22:19:40.337Z";
        String endTime = "2020-11-02T22:19:40.337Z";
        reservationService.addReservation(new ReservationDTO("one1", "Test", Instant.parse(startTime) , Instant.parse(endTime)));
        List<ReservationDTO> reservations = reservationService.getReservations("one1");
        Assertions.assertTrue(reservations.size() == 1);
    }

    @Test
    void testOverlappingReservation1() {
        String startTime = "2021-11-01T22:19:40.337Z";
        String endTime = "2021-11-01T22:50:40.337Z";
        reservationService.addReservation(new ReservationDTO("one1", "Test", Instant.parse(startTime) , Instant.parse(endTime)));
        List<ReservationDTO> reservations = reservationService.getReservations("one1");
        Assertions.assertTrue(reservations.size() == 1);
    }

    @Test
    void testOverlappingReservation2() {
        String startTime = "2021-11-02T22:10:40.337Z";
        String endTime = "2021-11-02T22:19:40.337Z";
        reservationService.addReservation(new ReservationDTO("one1", "Test", Instant.parse(startTime) , Instant.parse(endTime)));
        List<ReservationDTO> reservations = reservationService.getReservations("one1");
        Assertions.assertTrue(reservations.size() == 1);
    }
}
