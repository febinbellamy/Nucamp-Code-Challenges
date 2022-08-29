/*
Notice there is a locationRouter.js module in the /routes folder. In the server.js file, require the locationRouter module, then use it to handle requests to the '/locations' path. 

- In the locationRouter.js, create an Express router with the name of locationRouter.

Handle GET and POST requests to the '/' path for locationRouter:
- For the GET request, simply return all the locations. Use the res.send() method to handle returning an array, rather than res.end().
- For the POST request, this is where you will deal with submissions of the HTML form in server.js. 
You will look for the location property from the request body and add it to the locations array, then return the locations array as a response.
- Be sure to export the locationRouter from the module.

Test the POST endpoint: 
Add another location to the form and submit it. You should then see the array of locations with yours added to the end.

Test the GET endpoint: 
You will need to select the option to Show (preview) your code in a New Window for testing this one. Then, you will be able to add /locations to the end of the path in your browser's address bar. 
This should show you the list of locations. 
*/

const express = require("express");

const app = express();
const locationRouter = require("./routes/locationRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/locations", locationRouter);

app.get("/", (req, res) => {
  console.log(req.headers);
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <html>
    <body>
      <form action='/locations' method='post'>
      <label for='location'>Add a location: 
      <input type='text' name='location' />
      </label>
      <button type='submit'>Submit</button>
      </form>
    </body>
    </html>
  `);
});

const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

/* Forked from https://codesandbox.io/s/oqprp9m6oy */
