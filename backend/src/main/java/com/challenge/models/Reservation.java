package com.challenge.models;

import java.time.LocalDateTime;

public class Reservation {

    private String user;
    private String event;
    private LocalDateTime startTime;
    private LocalDateTime endTime;

    public Reservation(String user, String event, LocalDateTime startTime, LocalDateTime endTime) {
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

    @Override
    public String toString() {
        return "Reservation{" +
                "user='" + user + '\'' +
                ", event='" + event + '\'' +
                ", startTime=" + startTime +
                ", endTime=" + endTime +
                '}';
    }
}
