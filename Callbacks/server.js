/* 
Code Challenge:

The willItBlend() function will randomly return either the message "Oh No! It didn't Blend" or the "Good news! It Blends!". Your goal will be to refactor the code so that the server responds with the result of calling the willItBlend function every time you run the code.

- Delete the "Hello World" line. In its place, call the function willItBlend, and write the callback function that is passed into it as its argument, inline within the function call's parameter list, using the error callback pattern you've learned about. 
- Handle both the success and error case. 
- When done, you should be able to run the code and see the random response from the server. Run it several times to make sure that you get both the success and error responses at least once. 

*/

const http = require("http");

function willItBlend(callback) {
  // should be true for anything divisible by 3 between 0 and 9
  const itBlends = Math.floor(Math.random() * 10) % 3 === 0;

  if (itBlends) {
    callback(null, "Good news! It Blends!");
  } else {
    callback(new Error("Oh No! It didn't Blend!"));
  }
}

//create a server object:
http
  .createServer(function (req, res) {
    willItBlend((err, result) => {
      if (err) {
        res.write(err.message, result);
      } else {
        res.write(result);
      }
    });

    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

// this is a fork of https://codesandbox.io/s/rl9v3156lp
