# Runbook for Node.js API with `/reservation` endpoint

## Purpose

The purpose of this runbook is to provide step-by-step instructions on how to view and interact with a Node.js API that has the /reservation endpoint, which supports GET and POST methods.

## Prerequisites
* A computer with Node.js and a web browser installed.


## Procedure
### Step 1: Clone the API repository
1. Open a terminal or command prompt.
2. Navigate to the directory where you want to clone the API.
3. Run the following command: `git clone https://github.com/kcereno/bl-backend-challenge-solution.git`.
### Step 2: Install API dependencies
1. Navigate to the API directory using the CLI.
2. Run the following command: `npm install`.
3. Wait for the dependencies to be installed.
### Step 3: Start the API 
1. Run the following command: `npm start`.
2. Open a web browser and navigate to `http://localhost:3000/` to get all reservations
### Step 4: Use GET method on `/reservation` to fetch future reservations
1. To fetch future reservations, you can use a web browser or a tool like Postman.
    * To use a web browser, open a web browser and navigate to the /reservation endpoint URL. This will usually be `http://localhost:3000/reservation`, where "3000" is the default port number specified by the API and `/reservation` is the endpoint.
    * To use Postman, open Postman and create a new request. Set the request method to "GET". Enter the URL for the `/reservation` endpoint of the API, which should be `http://localhost:3000/reservation` by default. Click the "Send" button to send the GET request to the API.
### Use POST method on `/reservation` to add reservation
1. To make a POST request, you can use a tool like Postman.
    * Open Postman and create a new request.
    * Set the request method to "POST".
    * Enter the URL for the `/reservation` endpoint of the API, which should be `http://localhost:3000/reservation` by default.
    * Set the request body to a reservation payload in JSON format.
        * The submitted reservation must be an object that includes the following keys: `name`, `startTime`, and `endTime`. The `startTime` and `endTime` keys must be in date string format, such as `"2023-09-15T09:00:00Z"`.
    * Click the "Send" button to send the POST request to the API.
    * Verify that the API returns a success response. If the API returns an error, check the API

## Conclusion
This concludes the steps to view the Node.js API with the /reservation endpoint that supports GET and POST methods.
If you encountered any issues during the procedure or have any questions or comments, refer to the API documentation or contact the API maintainers.

Remember that the submitted reservation must be an object that includes the `name`, `startTime`, and `endTime` keys, with `startTime` and `endTime` values in date string format. You can use `"2023-09-15T09:00:00Z"` as an example.

With these instructions, you should be able to successfully test and interact with the Node.js API with the `/reservation` endpoint using the modified source code.

You can view the original repo at [https://github.com/kcereno/bl-backend-challenge-solution](https://github.com/kcereno/bl-backend-challenge-solution)

