package com.example.demo;

import java.time.LocalDateTime;

public class EventReservation {
    private String user;
    private String event;
    private LocalDateTime startTime;
    private LocalDateTime endTime;

    public EventReservation() {
    }

    public EventReservation(String user, String event, LocalDateTime startTime, LocalDateTime endTime) {
        this.user = user;
        this.event = event;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getEvent() {
        return event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }
}
