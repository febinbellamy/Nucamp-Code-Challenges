/*
In the server.js file, require the secretsRouter module, then use it to handle requests to the '/secrets' path. In secretsRouter.js, create and export an Express router that handles GET requests to '/'. 

This should send back a message of some kind, formatted as HTML. It can be any secret message you like. 

In server.js, use what you have learned about routing and Basic Authentication to secure this route until a username of jbond and the password AstonMartin007 have been entered. 

The username check should be case insensitive. The password check should be case sensitive. The secrets route should return a status code of 401 and string of "You are not authorized to view this resource" if a call is made without authorization or the wrong username and password. 


TESTING:
Open your Glitch in a incognito/private browser window. Use the Show -> In a New Window option, then add /secrets to the end of the path in the browser address bar. You should be challenged to enter your credentials.

Test with wrong credentials, including using the right password but with incorrect casing to make sure that your case sensitivity check for the password is working, as well as entering blank credentials or trying to cancel from the authentication challenge dialog.

Ensure that when you do enter the correct credentials, you are able to see your secret message.
*/

const express = require("express");
const secretsRouter = require("./routes/secretsRouter");

const port = parseInt(process.env.PORT, 10) || 3000;

const app = express();

app.get("/", (req, res) => {
  console.log(req.headers);
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <html>
    <body>
      hello world
    </body>
    </html>
  `);
});

function auth(req, res, next) {
  console.log(req.headers);
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    const err = new Error("You are not authorized to view this resource");
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    return next(err);
  }

  const auth = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");
  const user = auth[0].toLowerCase();
  const pass = auth[1];
  if (user === "jbond" && pass === "AstonMartin007") {
    return next(); //authorized
  } else {
    const err = new Error("You are not authorized to view this resource");
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    return next(err);
  }
}

app.use(auth);
app.use("/secrets", secretsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}/`);
});

/* forked from https://codesandbox.io/s/r1rqpr9zqq */
