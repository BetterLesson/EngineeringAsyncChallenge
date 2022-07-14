package org.openapitools.api;

import org.openapitools.model.Reservation;
import org.openapitools.model.Response;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.context.request.NativeWebRequest;

import javax.validation.constraints.*;
import javax.validation.Valid;

import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.annotation.Generated;

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2022-07-13T20:52:52.801091500-04:00[America/New_York]")
@Controller
@RequestMapping("${openapi.reservations.base-path:/v1}")
public class ReservationApiController implements ReservationApi {

    private final NativeWebRequest request;
    private final List<Reservation> reservations = new ArrayList<>();

    @Autowired
    public ReservationApiController(NativeWebRequest request) {
        this.request = request;
    }

    @Override
    public Optional<NativeWebRequest> getRequest() {
        return Optional.ofNullable(request);
    }

    @Override
    public ResponseEntity<List<Reservation>> getReservation() {
        System.out.println("GET /reservation");

        // Filter out any reservations not in the future
        List<Reservation> futureReservations = reservations.stream()
                .filter(reservation -> {
                    ZonedDateTime start = getStartTime(reservation);
                    ZonedDateTime now = ZonedDateTime.now();
                    return start.isAfter(now);  // In Future
                })
                .collect(Collectors.toList());

        return new ResponseEntity<List<Reservation>>(
                futureReservations,
                HttpStatus.OK
        );
    }

    @Override
    public ResponseEntity<Response> postReservation(Reservation reservation) {
        System.out.println("POST /reservation " + reservation.toString());

        // Parse the Start & End Time
        ZonedDateTime start = getStartTime(reservation);
        ZonedDateTime end = getEndTime(reservation);
        ZonedDateTime now = ZonedDateTime.now();

        // Check if the start and end time is valid
        if (start == null || end == null) {
            return createResponse(HttpStatus.BAD_REQUEST, "Start/End time is invalid");
        }

        System.out.println(start.toString() + " " + end.toString());

        // Check Already Passed
        if (start.isBefore(now)) {
            return createResponse(HttpStatus.BAD_REQUEST, "Event already passed.");
        }

        // Check if start is after end
        if (end.isBefore(start)) {
            return createResponse(HttpStatus.BAD_REQUEST, "Event end is before start.");
        }

        // Check Overlap
        if (doesOverlap(start, end, this.reservations)) {
            return createResponse(HttpStatus.BAD_REQUEST, "Event overlaps another.");
        }

        // Add the reservation to the DB (local list in this case)
        this.reservations.add(reservation);

        return createResponse(HttpStatus.OK);
    }

    private ZonedDateTime getStartTime(Reservation reservation) {
        try {
            Instant start = Instant.from(DateTimeFormatter.ISO_INSTANT.parse(reservation.getStartTime()));
            return ZonedDateTime.ofInstant(start, ZoneId.of("UTC"));
        } catch (Exception ex) {
            System.err.println("Unable to parse start time to ZonedDateTime");
            return null;
        }
    }

    private ZonedDateTime getEndTime(Reservation reservation) {
        try {
            Instant end = Instant.from(DateTimeFormatter.ISO_INSTANT.parse(reservation.getEndTime()));
            return ZonedDateTime.ofInstant(end, ZoneId.of("UTC"));
        } catch (Exception ex) {
            System.err.println("Unable to parse end time to ZonedDateTime");
            return null;
        }
    }

    private boolean doesOverlap(ZonedDateTime start, ZonedDateTime end, List<Reservation> reservations) {
        return reservations.stream().anyMatch(reservation -> {
            ZonedDateTime startTime = getStartTime(reservation);
            ZonedDateTime endTime = getEndTime(reservation);
            return (start.isAfter(startTime) && start.isBefore(endTime)) ||
                    (end.isAfter(startTime) && end.isBefore(endTime)) ||
                    (start.equals(startTime) && end.equals(endTime));
        });
    }

    private ResponseEntity createResponse(HttpStatus httpStatus) {
        return createResponse(httpStatus, httpStatus.getReasonPhrase());
    }

    private ResponseEntity createResponse(HttpStatus httpStatus, String message) {
        return new ResponseEntity(
                new Response()
                        .code(String.valueOf(httpStatus.value()))
                        .message(message),
                httpStatus
        );
    }
}
