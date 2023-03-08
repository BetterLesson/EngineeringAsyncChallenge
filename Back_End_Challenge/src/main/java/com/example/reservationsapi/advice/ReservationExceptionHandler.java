package com.example.reservationsapi.advice;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.example.reservationsapi.exception.EventHasPassedException;
import com.example.reservationsapi.exception.EventOverlapsException;

@ControllerAdvice
public class ReservationExceptionHandler {
    
    @ResponseStatus(
        value = HttpStatus.BAD_REQUEST,
        reason = "The event reservation has already passed."
    )
    @ExceptionHandler(EventHasPassedException.class)
    public void handleException(EventHasPassedException ex) {}

    @ResponseStatus(
        value = HttpStatus.BAD_REQUEST,
        reason = "The event reservation overlaps an existing reservation."
    )
    @ExceptionHandler(EventOverlapsException.class)
    public void handleException(EventOverlapsException ex) {}
}
