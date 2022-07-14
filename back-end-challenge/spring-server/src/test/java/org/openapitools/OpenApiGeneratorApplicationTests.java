package org.openapitools;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.openapitools.api.ReservationApiController;
import org.openapitools.model.Reservation;
import org.openapitools.model.Response;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;


@SpringBootTest
class OpenApiGeneratorApplicationTests {

    /**
     * {
     * "user": "myusername",
     * "event": "Global Hack-a-thon",
     * "startTime": "2022-01-04T15:00:00Z",
     * "endTime": "2022-01-07T00:00:00Z"
     * }
     */

    ReservationApiController controller = new ReservationApiController(null);

    @Test
    void contextLoads() {
        Reservation reservationOld = new Reservation()
                .user("myusername")
                .event("Global Hack-a-thon")
                .startTime("2022-01-04T15:00:00Z")
                .endTime("2022-01-07T00:00:00Z");

        Reservation reservationFuture = new Reservation()
                .user("myusername")
                .event("Global Hack-a-thon")
                .startTime(DateTimeFormatter.ISO_INSTANT.format(Instant.now().plusSeconds(10000)))
                .endTime(DateTimeFormatter.ISO_INSTANT.format(Instant.now().plusSeconds(1000000)));

        // Attempt to post an invalid reservation
        ResponseEntity<Response> res = controller.postReservation(reservationOld);
        assertEquals(400, res.getStatusCodeValue());

        // Post a valid reservation for the future
        res = controller.postReservation(reservationFuture);
        assertEquals(200, res.getStatusCodeValue());

        // Attempt to post the same reservation again, should fail due to overlap
        res = controller.postReservation(reservationFuture);
        assertEquals(400, res.getStatusCodeValue());
        assertNotNull(res.getBody());
        assertEquals("Event overlaps another.", res.getBody().getMessage());

        // Verify the one valid reservation exists
        ResponseEntity<List<Reservation>> reservationResponse = controller.getReservation();
        assertEquals(200, reservationResponse.getStatusCodeValue());
        assertNotNull(reservationResponse.getBody());
        assertEquals(1, reservationResponse.getBody().size());
    }

}