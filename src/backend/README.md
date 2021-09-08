Back End Challenge
==================

Completed work
--------------

- A POST endpoint at `/reservation` to make reservations requests
- The start time of the reservation must be in the future
- The time range of the reservation cannot overlap with any other reservations made by the same user
- A GET end point at `/reservation` to view future reservations for the specified user
- Returns standard HTTP response status codes (I think; I send 409 Conflict in both error cases but I'm not sure if there's a better one)
- Error responses include a message
