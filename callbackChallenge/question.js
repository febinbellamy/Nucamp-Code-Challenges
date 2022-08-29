// challenge
const message = "your phone number is contained somewhere in the digits of Pi";
const surprisedReaction = () => console.log(":o"); // arrow function declaration
const smoothReaction = () => console.log("B)"); // arrow function declaration

// if no argument is passed in, 'you forgot to submit a message' will be the default value of the parameter that gets used
const saySomethingAndReact = (msg = "you forgot to submit a message") => {
  console.log(msg);
  return (reaction) => {
    // a callback function is being returned
    reaction();
  };
};

// solution:
const reaction = saySomethingAndReact(message);
reaction(surprisedReaction);

// alternative solution:
saySomethingAndReact(message)(smoothReaction);
