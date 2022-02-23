# Instructions
Using something like Postman is recommended to connect to api endpoints

1. Run `npm i && npm start` from back-end folder
2. Post data to endpoints and http://localhost:3010
3. Attempt posting the following to `/reservation`:
```json
{
  "user": "marigold",
  "event": "Global Hack-a-thon",
  "startTime": "2022-01-04T15:00:00Z",
  "endTime": "2022-01-07T00:00:00Z",
}
```
4. Attempt pulling data via GET `/reservation`
5. Attempt posting additional reservations for "marigold" formated as in step #3
