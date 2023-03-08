# Engineering Asynchronous Challenge

  The following is a set of challenges representing core domains of full-stack web application development. The purpose of this challenge is to give engineer candidates an opportunity to demonstrate their development capabilities in the environment they are accustomed to. 
  
  We request that candidates spend between 90 and 180 minutes of focused time on this challenge. Many engineers can spend over that amount of time on this challenge striving for perfection. We review the results of these challenges with the understanding that 180 minutes is not enough time to create perfect solutions. Instead, it provides a great tool to faciliate conversation about your development strengths. 

  Please complete as many challenges as you like. As a rule of thumb, JR Engineer candidates should aim to complete one challenge, Engineers attempt to complete two, and Senior Engineers attempt to complete all three challenges.
  
  You may submit incomplete solutions so long as you include a README.md in the challenge subdirectory indicating what was completed and what is outstanding. 
  

### Submission Instructions
  
  Create a subdirectory in this project for each challenge you complete. Ensure that each directory contains a RUNBOOK.md file that contains detailed instructions on how to run your solution. 

  Submit a [Pull Request](https://help.github.com/en/articles/about-pull-requests) (PR) to this repository. Once your PR is created, our team will review the request. Please monitor your notifications in the event we submit questions or comments on your PR. 

## Front End Challenge [DONE]

We have an exciting new opportunity to expand our coaching services to additional industries beyond K-12 education. To prepare for this new service offering, we need you to quickly build a new web page for them with the following requirements:

* Company name title

* A table that previews initial coaching experts that will be available at launch. Please create this table using a solution other than HTML table tags. A good solution is easily styled and resuable within the application.

* Company logo as icon in browser tab

* Contact us web form that captures contact information for interested users

* Basic validation of web form before submission

* Dump all the information from the form submission to browser console

Coaching experts table:

|Coach Name | Available Starting | Industry |
| --------- | ------ | ------------ |
| Jessica D. | 11/6/22 | Professional Services |
| David F. | 8/5/21 | Sports/Fitness |
| Keir Y. | 4/12/22 | E-Sports |

** Note ** - A possible UI design of this webpage has been provided in the project. You should take any creative liberties you would like with this challenge however.

## Back End Challenge [DONE]

  Create a service with [REST API](https://www.restapitutorial.com) which performs the following functionality: 
  - A POST endpoint at `/reservation` where a user submits a JSON request to add an event reservation to their profile
  - An event reservation must have not already passed to be valid
  - An event reservation must not overlap an existing reservation for that user
  - A GET endpoint at `/reservation` where a user gets all future event reservations in their profile
  - All endpoints return standard HTTP response status codes
  - Error responses include supporting error message

  ** Note ** - An event is considered 'passed' if the current local time is beyond the start time of the event. Likewise, events are defined as in the future if their start date is beyond the current local time.
  
  ** Note ** - Persistence of data is not expected in this challenge. It is expected that the data will reset when the service is stopped/restarted.

  ** Sample Request ** - You may choose how to implement the API request & response models. Below is a sample request payload for `/reservation`
  ```json
  {
    "user": "myusername",
    "event": "Global Hack-a-thon",
    "startTime": "2022-01-04T15:00:00Z",
    "endTime": "2022-01-07T00:00:00Z",
  }
  ```   
  

## Database Challenge [PART 1 DONE]

  **Part 1** [DONE]
  
  We have acquired a company that chose to use a NoSQL database in their systems to skip data modeling. In order to ensure orders are processed and invoiced correctly with our systems, we need to move to a relational database. Please review the current data stored in the NoSQL database and submit a new relational data model visualization as a proposed design. 

Startup Order NoSQL Database

|Field Name | Type   | Sample Value |
| --------- | ------ | ------------ |
|UUID  | Number | 12345678         |
|Customer Name | String | Jane Doe    |
|Cell Phone | String | 405.867.5309 |
|Email      | String |jane_teacher@gmail.com |
|Address    | String | 123 School Way, Dallas TX 75001 |
|Coaching Service ID | List of Number | [37,2002,101] |
|Book Set ID| List of Number | [22,21] |
|Order Total | Number | 37.99 |
|Order Date | String | 12/25/22T23:00:05Z |
|Discount Code | String | CHEAP |

**Part 2** [OUTSTANDING]

  The next step is to create a solution that can migrate the data from their current database to your new relational database. Write a basic program in a language of your choice such as Python or Java. Read in a JSON file that contains the records from the old database, format the data to match your new data model, and print SQL statements to console/standard IO that would insert these records into the new database.
  
