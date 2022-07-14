# Database Challenge

**Author**: Brandon Malaguti (brandon.malaguti@gmail.com)

The solution to Part 1 is captured in [PART1.md](PART1.md)

# Part 2

I choose to use Java to implement part 2 of the Database Challenge. The tool uses GSON to translate the JSON file to an Object. The object is then used to print the resulting SQL commands to the console.

The logic is primarily contained in [Translate.java](src\main\java\Translate.java). It parses a sample json [file](src\main\resources\order-sample.json) by default if no json file is supplied when running.

## Set Up

Instructions for the initial set up of the database challenge part 2.

1. Install Java and Maven. (or IDE with them)
2. Change to `database-challenge` directory.
3. Run `mvn install`. This will compile classes and package the jar.

## Run

Instructions for running the tool after set up.

1. Change to `database-challenge/target` directory.
2. Run `java -jar database-challenge-1.0-SNAPSHOT.jar` to run the tool.
3. Review console output for results.
