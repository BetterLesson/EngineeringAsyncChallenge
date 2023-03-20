Requirements:\
Java 17

To start server:\
    From JAR:\
        &emsp;-Open Command Prompt\
        &emsp;-Cd to ../EngineeringAsyncChallenge/BackEndChallenge/build/libs\
        &emsp;-Type in "java -jar BackEnd.jar" and press Enter
    From source:\
        &emsp;-Open BackEndChallenge folder in Intellij\
        &emsp;-Run

To test API:\
    &emsp;-Postman (use localhost:8080/reservation)
    &emsp;-Open separate Command Prompt and use below curl commands, or copy to Postman Code snippet editor and hit Send\
    &emsp;-POST: curl --location "http://localhost:8080/reservation" --header "Content-Type: application/json" --data "{\"user\": \"myusername\", \"event\": \"Global Hack-a-thon\",\"startTime\": \"2024-05-04T15:00:00Z\",\"endTime\": \"2024-06-08T00:00:00Z\"}" \
    &emsp;-GET: curl --location --request GET "http://localhost:8080/reservation" --header "Content-Type: application/json" --data "{"user":"myusername"}" \
