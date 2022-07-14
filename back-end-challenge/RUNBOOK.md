# Back End Challenge

**Author**: Brandon Malaguti (brandon.malaguti@gmail.com)

I choose to use an OpenAPI 3 specification for defining the interface. I then used `openapi-generator-cli` to generate a Java/Spring server for quickly prototyping the API defined in the Back End Challenge.

The generated server is in `spring-server`. I primarily implemented the logic for this challenge in [OpenApiGeneratorApplicationTests.java](spring-server\src\test\java\org\openapitools\OpenApiGeneratorApplicationTests.java) and [ReservationApiController.java](spring-server\src\main\java\org\openapitools\api\ReservationApiController.java).

## Set Up

Instructions for the initial set up of the back-end-challenge.

1. Install Java and Maven. (or IDE with them)
2. Change to `back-end-challenge/spring-server` directory.
3. Run `mvn install`.

    This will compile, package the jar, and run the tests from OpenApiGeneratorApplicationTests.java.

## Run

Instructions for running the service after initial setup.

1. Change to `back-end-challenge/spring-server/target` directory.
2. Run `java -jar openapi-spring-1.0.jar` to launch the service.
3. Browse to [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html) to view the openapi spec, and to test the service.