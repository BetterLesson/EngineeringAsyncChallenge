# Back End Challenge

### Instructions

Run `node install` to install [Express](https://expressjs.com/ "Express") dependecy
Run `node index.js` to start the rest API at port 4000

`POST http://localhost:4000/reservation`

**Body type**

```json
{
  "reservation": {
    "user": "myusername",
    "event": "Global Hack-a-thon",
    "startTime": "2022-01-04T15:00:00Z",
    "endTime": "2022-01-04T15:00:00Z"
  }
}
```

`GET http://localhost:4000/reservation`

Params user
Example: `http://localhost:4000/reservation?user=myusername`

### Validations applied

- start time should be greater than current date
- end time should be greater than start time
- username field must not have spaces and must not be empty
- event field must not be empty
- reservations must not overlap on the same user
- GET query returns future reservations only
