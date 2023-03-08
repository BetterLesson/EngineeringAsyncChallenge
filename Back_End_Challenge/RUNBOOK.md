# How to Run

To run the solution to the Back End Challenge, you will need to do the following:

1. Open up a terminal
2. Go to the **Back_End_Challenge** directory
3. Run the following command to start the service:

    `mvn clean spring-boot:run`

Once the service is running you can start sending request.

- To create a reservation, you will need to send a POST request to **localhost:8080/reservation**
- To get a user's future reservations, you will need to send a GET request to **localhost:8080/reservation?user=<your_user>**
  - The **user** query param is required
