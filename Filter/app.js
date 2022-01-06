const pets = ["goldfish", "dog", "turtle", "tiger"]

const petsShortNames = pets.filter(elem => elem.length <= 5)
// The below line should console.log: ["dog", "tiger"]
console.log(petsShortNames);


const petsTNames = pets.filter(elem => elem[0] === 't')
// The below line should console.log: ["turtle", "tiger"] 
console.log(petsTNames);


const numbers = [3, 7, 4, 5, 10];
const numbersBiggerThanFour = numbers.filter(num => num > 4)
// The below line should console.log: [7, 5, 10]
console.log(numbersBiggerThanFour);


const evenNumbers = numbers.filter(num => num % 2 === 0)
// The below line should console.log: [4, 10]
console.log(evenNumbers);