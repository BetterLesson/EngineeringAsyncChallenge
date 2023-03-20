package com.example.BackEndChallenge;

public class Reservation {
    private String user, event, startTime, endTime;

    public String getUser(){
        return user;
    }

    public String getEvent() {
        return event;
    }

    public String getStartTime() {
        return startTime;
    }

    public String getEndTime(){
        return endTime;
    }

    public void setUser(String user){
        this.user=user;
    }

    public void setEvent(String event){
        this.event=event;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }
}
