To run:
npm install
npm start

I considered dockerizing it. But, I decided to prioritize elsewhere.

Changes I would make, given more time;
- Reimplement the error handling so that it would also process non-server/500 errors, so that I wouldn't have to return { 400, errorDetails }.
    - That would also simplify returning the two different errors checked for when comparing with current events for event already registered or time overlap
- Obviously, this should use auth in practice
    - Assuming a separate administrator API, the GET API may eschew the userid parameter and just take it from the auth results.
- Obviously, this should be backed up by a database.
- More stubbed test data
- Unit testing

Design reasoning
- I considered doing this in Java (as that seems to be BetterLesson's preferred backend). But, I'm not setup for Java development on my current personal computer and didn't want to expend limited time on wrestling with Java/mvn/docker/intellij setup and the like.
- To save time, I created an openapi spec (found in the docs subdir) and used https://www.npmjs.com/package/swagger-node-codegen to generate stubs from that.
- I included the postman collection I used for testing within the docs subdir.
