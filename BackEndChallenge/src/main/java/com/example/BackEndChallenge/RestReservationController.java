package com.example.BackEndChallenge;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@org.springframework.web.bind.annotation.RestController
@RequestMapping(path="/reservation")
public class RestReservationController {
    @Autowired
    private Reservations reservations;

    @PostMapping(
            consumes = "application/json",
            produces = "application/json")
    public ResponseEntity<String> postReservation(@RequestBody Reservation reservation){
        try{
            reservations.addReservation(reservation);
            return ResponseEntity.ok("Reservation added for user "+reservation.getUser()+" at event "
                    +reservation.getEvent());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @GetMapping(
            consumes = "application/json",
            produces = "application/json")
    public ResponseEntity<List<Reservation>> getReservations(@RequestBody String user){
        JsonObject jsonUserObject= JsonParser.parseString(user).getAsJsonObject();
        String username=jsonUserObject.get("user").getAsString();

        try{
            List<Reservation> reservationList=reservations.getReservationList(username);

            //checking if reservations are present
            if(reservationList.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(reservationList, HttpStatus.OK);
        }catch (Exception e){
            //returns if usernames do not match any in current reservations
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
