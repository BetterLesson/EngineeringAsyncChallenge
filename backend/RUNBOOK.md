# Back End Challenge

## Instructions to spin up the REST API Service
* Import/Open the SpringBoot project in the `backend` directory as a maven project by choosing the pom.xml file
* In the terminal under the `backend` directory run `mvn spring-boot:run` to start the service 
* In another terminal issue the following commands for GET and POST for various test cases:
         

#### Invalid Start Time
     `curl -X POST localhost:8080/api/reservation -H 'Content-Type: application/json' -d '{"user": "myusername", "event": "Global Hack-a-thon", "startTime": "2022-01-04T15:00:00Z",  "endTime": "2022-01-07T00:00:00Z" }'`


#### Good Start Time
    `curl -X POST localhost:8080/api/reservation -H 'Content-Type: application/json' -d '{"user": "myusername", "event": "Global Hack-a-thon", "startTime": "2024-01-04T15:00:00Z",  "endTime": "2022-01-07T00:00:00Z" }'` 


#### End Time is before Start Time
    `curl -X POST localhost:8080/api/reservation -H 'Content-Type: application/json' -d '{"user": "myusername", "event": "Global Hack-a-thon", "startTime": "2024-01-04T15:00:00Z",  "endTime": "2021-01-07T00:00:00Z" }'`

#### Get Reservations
    `curl 'http://localhost:8080/api/reservation?user=myusername'`