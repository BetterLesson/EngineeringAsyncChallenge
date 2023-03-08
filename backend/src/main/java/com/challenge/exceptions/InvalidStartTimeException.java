package com.challenge.exceptions;

public class InvalidStartTimeException extends RuntimeException{
    public InvalidStartTimeException() {
    }

    public InvalidStartTimeException(String message) {
        super(message);
    }

    public InvalidStartTimeException(String message, Throwable cause) {
        super(message, cause);
    }
}
