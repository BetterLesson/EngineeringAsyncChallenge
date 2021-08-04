# Back End Challenge

### To run with Docker:
- Install [Docker](https://www.docker.com/get-started)
- Open a terminal, and set your working directory to the folder this file is in.
- Run `docker build -t bl-back-end .` This may take a few minutes
- Once the image is built, execute `docker run -p 5000:5000 -v $(pwd):/app --name bl-back-end bl-back-end:latest`
- Once the container is running, visit [http://localhost:5000/reservation](http://localhost:5000/reservation)
- To see the logs, use `docker logs bl-back-end`
- To stop the container use `docker kill bl-back-end`
- You can insert records for testing using curl: `curl -XPOST --data '{"user": "myusername","event": "Global Hack-a-thon","startTime": "2022-01-04T15:00:00Z","endTime": "2022-01-07T00:00:00Z"}' -H 'Content-Type: application/json' http://localhost:5000/reservation`
- You can see all inserted records at `/reservation` via a GET request, and navigate to a single record using `/reservation/<reservation_id>`

### To run without Docker:
- Install [Python](https://www.python.org)
- Install dependent packages: `pip install -r requirements`
- Run the server `python app.py`
- You'll see the logs on screen, and you can kill the server using `CTRL+C`

