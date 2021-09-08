Back End Challenge
==================

This is written with Node.JS, so you'll want to make sure node is installed.
Then you can run

```shell
$ npm install # install dependencies (just Express)
$ node index.js
```

to start the server.

There aren't any web forms to submit or request data, so you'll need to submit
all of the requests using a tool like [Postman](https://www.postman.com/).

The JSON data for the POST reuqest should include at least key-value pairs for
`user`, `startTime` and `endTime`.  Currently, no validation of this data is
done.  The JSON data for the GET request should at least include a key-value
pair for `user`.  Again, no validation is done.
