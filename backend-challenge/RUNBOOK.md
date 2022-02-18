## Sources

- [FeathersJS](https://feathersjs.com/)
- [DayJS](https://day.js.org/)

## How to run the project

- Make sure you have node and npm installed on your machine

- Open a terminal inside the **backend-challenge** folder and run `npm install`. This will install all dependencies from **package.json**.

- While inside the **backend-challenge** folder, run `npm run dev`. The project will open at this url: http://localhost:3030/

## GET - /reservation

**Query Options:**

**user**

Example query:

    /reservation?user=USERNAME

## POST - /reservation

**Body Parameters**

- user - The username to be attached to the reservation [STRING]
- event - The name of your event [STRING]
- startTime - The start date of your reservation [ISO DATE]
- endTime - The end date of your reservation [ISO DATE]

Example body

    {
    	  "user": "jscoder123",
        "event": "My Cool Event",
        "startTime": "2022-06-19T15:00:00Z",
        "endTime": "2022-06-28T15:00:00Z"
    }

The code for the endpoints are located here: **/src/services/reservation/reservation.class.js**
