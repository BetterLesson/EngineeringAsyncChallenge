# Backend Challenge

This REST API was built using ExpressJS. It's a simple server that has a POST and GET
endpoint under `/reservation`.

All new POST reservations will be validated for overlaps, and will be validated to make sure that the date is in the future.

## Example response

```bash
{
  message: "Reservation created",
  {
    user: "",
    event: "",
    startTime: "",
    endTime: "",
  }
}
# or

```

The GET endpoint will return all reservations made for each user.

## Example response

```bash
{
  user: [
  {event, start, end},
  {event, start, end}
  ],
  ...
}

```

## Considerations
If this were a production environment, there would be a few things considered.
- Instead of an in memory store, we could leverage a database. NoSQL would probably fit best because this is write heavy based on my initial observations.
- More robust type checking and parameter validation. I would definitely have leveraged typescript.
- Depending on how large we want to scale this, maybe I would consider leveraging an ORM.

## Instructions to run

To run, please do the following.

Install Packages then run start script
```
npm install
npm start
```

