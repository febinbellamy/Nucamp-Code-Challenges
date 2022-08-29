const INSTRUMENT_TYPE_STRING = 0;
const INSTRUMENT_TYPE_PERCUSSION = 1;
const INSTRUMENT_TYPE_WIND = 2;

const instruments = [
  {
    id: 0,
    name: "guitar",
    type: INSTRUMENT_TYPE_STRING,
  },
  {
    id: 1,
    name: "xylophone",
    type: INSTRUMENT_TYPE_PERCUSSION,
  },
  {
    id: 2,
    name: "zither",
    type: INSTRUMENT_TYPE_STRING,
  },
  {
    id: 3,
    name: "bagpipes",
    type: INSTRUMENT_TYPE_WIND,
  },
];

/*
Challenge 1

Part 1: Write a function "sortItems" that takes an array of objects and returns it sorted alphabetically by the value of the 'name' property of each object.
Use the example at this MDN page to help you. On that page, look for the code under where it says "Objects can be sorted given the value of one of their properties" and inside that code, look under the comment "// sort by name".

However, make this important change: Let's say we do not want to mutate the original array being passed in. sort() is a mutator method, so we need to make a copy of the array. To do this, use the spread syntax on the array that you are sorting, rather than sorting the passed-in array directly.
Create a new array using the [ ] syntax around the spread array, and use sort on that new array.

Bonus: Change the callback function inside sort() to an arrow function.

Part 2: In your sorting code, instead of if/else as given in the MDN example, use the ternary operator syntax ? : for your return values. Since there are 3 potential return values (1, 0, -1), you will need to chain/nest ternary operators. Conduct your own research on chaining ternary operators.

Part 3: Immediately following this code, call the sortItems function that you created and console.log() it. Beneath that, console.log() the instruments array. Confirm that the instruments array has not been mutated (is in its original form) and the sorted array is in alphabetical order by name. (This has already been done for you in lines 33 and 34, so all you need to do is uncomment the console.log code and run it.)
*/

const sortItems = (objArr) => {
  return (sortedObjArrCopy = [...objArr].sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  }));
};

console.log(sortItems(instruments));
console.log(instruments);



/* 
Challenge 2:

Part 1: Write a function named "getType" that takes an array of objects and an integer containing the type to filter by. Use the .filter() method to filter out and return a new array that contains only the objects that match the given type. Recall that filter is not a mutator method, so you do not need to do anything special to create a new array. You should be able to complete this task in a single line of code.
Part 2: Immediately following the function, write a line that logs to the console the results of calling the getType function with the instruments array and the type INSTRUMENT_TYPE_STRING.
*/

const getType = (objArr, type) => objArr.filter((instrumentObj) => instrumentObj.type === type);
console.log(getType(instruments, INSTRUMENT_TYPE_STRING));


/*
Challenge 3:

Part 1: Write a function "getNames" that takes an array of objects and uses the map() method to return a new array that contains only the values of the name property of each object (as strings, comma-separated) - i.e. [ 'guitar', 'xylophone', 'bagpipes', 'zither']. This should be possible to do in a single line of code.
Part 2: Beneath the function, console.log() the result of invoking the getNames function.
*/

const getNames = (objArr) => objArr.map((obj) => obj.name);
console.log(getNames(instruments));



// Challenge 4: Use the functions you have written to console.log() just the names of all stringed instruments as an array of strings - i.e. [ 'guitar', 'zither']. 
console.log(getNames(getType(instruments, INSTRUMENT_TYPE_STRING)));
