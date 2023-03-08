package com.challenge.exceptions;

public class OverlappingTimeException extends RuntimeException{
    public OverlappingTimeException() {
    }

    public OverlappingTimeException(String message) {
        super(message);
    }

    public OverlappingTimeException(String message, Throwable cause) {
        super(message, cause);
    }
}
