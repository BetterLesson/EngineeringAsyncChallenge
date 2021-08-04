# Front End Challenge

### To run with Docker:
- Install [Docker](https://www.docker.com/get-started)
- Open a terminal, and set your working directory to the folder this file is in.
- Run `docker build -t bl-front-end .` This may take a few minutes
- Once the image is built, execute `docker run -p 3000:3000 -v $(pwd):/app --name bl-front-end bl-front-end:latest`
- Once the container is running, visit [http://localhost:3000](http://localhost:3000)
- To see the logs, use `docker logs bl-front-end`
- To stop the container use `docker kill bl-front-end`

### To run without Docker:
- Install [NodeJS](https://nodejs.org/en/download/)
- Install Yarn: `npm install -g yarn`
- Install dependent packages `yarn`
- Run the server `yarn start`
- You'll see the logs on screen, and you can kill the server using `CTRL+C`

