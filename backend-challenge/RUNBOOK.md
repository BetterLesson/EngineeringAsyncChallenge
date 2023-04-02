## Backend Takehome Runbook

This project is a REST API service which allows users to add and view event reservations.

## Prerequisites

Node.js v14.x or higher
npm v7.x or higher

## Dependencies

- `moment` - library for working with dates and times in JavaScript

## Dev Dependencies

- `babel` - transpiler for modern JavaScript syntax
- `eslint` - linter for JavaScript
- `jest` - testing framework for JavaScript
- `nodemon` - utility for automatically restarting the server during development
- `prettier` - code formatter for JavaScript
- `supertest` - library for testing HTTP requests and responses in JavaScript
- `dotenv` - module for loading environment variables from a `.env` file
- `cross-env` - module for setting environment variables across different platforms
- `@types/pg` - TypeScript types for the `pg` module
- `@types/jest` - TypeScript types for the `jest` module

## Usage

Start the server: npm start

Use your preferred REST API client to interact with the API at http://localhost:3000
You can use Postman website or ThunderClient extension in VSCODE to test endpoints

API Endpoints

POST /reservation
Description: Adds an event reservation to a user's profile
Request Payload: json
Copy code
{
"user": "myusername",
"event": "Global Hack-a-thon",
"startTime": "2022-01-04T15:00:00Z",
"endTime": "2022-01-07T00:00:00Z"
}

## Response Status Codes:

201 Created: Reservation added successfully
400 Bad Request: Invalid request payload
409 Conflict: A reservation already exists for the specified user and time period
500 Internal Server Error: Server error

GET /reservation
Description: Adds an event reservation to a user's profile
Request Payload: json
Copy Code
{
"user": "myusername",
}

## Response Status Codes:

200 OK: Reservations retrieved successfully
400 Bad Request: Invalid request parameters
404 Not Found: No reservations found for the specified user
500 Internal Server Error: Server error
