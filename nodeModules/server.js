/*
Code Challenge:

- Click the "Show" button at the top of the page, then choose "Next to the code".  In the panel that appears, you should see the text: Nucamp offers classes in Bellingham, Marysville, Seattle, Tacoma, Spokane.

- Create a new file in the Glitch project named generate.js. Move the function assigned to the generateMessage constant into this file and export it from there.

- Import the generate module into server.js (using CommonJS format, not ES6), and assign it as the value for const generateMessage.
*/

const http = require("http");
const generateMessage = require("./generate.js");

const locations = ["Bellingham", "Marysville", "Seattle", "Tacoma", "Spokane"];

//create a server object:
http
  .createServer(function (req, res) {
    res.write(generateMessage(locations)); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

// this is a fork from https://codesandbox.io/s/xvw8orl17q
