// Global variables
const myName = "Lauren";
const numberOfStates = 50;
const sum = 5 + 4;

// ----------------------

// Functions / Objects

// Say Hello Function - returns an alert that states "hello world" once when called.
function sayHello() {
  alert("Hello World!");
  return;
}

sayHello();

// Check Age Function - checks whether or not a user is old enough to view a page.

function checkAge(name, age) {
  if (age >= 21) {
    console.log(`Corngrats, ${name}! You are old enough to view this page.`);
  } else {
    console.log(`Sorry, ${name}, you are not old enough to view this page.`);
  }
}

const people = [
  {
    name: "Charles",
    age: 21,
  },

  {
    name: "Abby",
    age: 27,
  },

  {
    name: "Jake",
    age: 18,
  },

  {
    name: "Jessie",
    age: 17,
  },
];

checkAge(people[0].name, people[0].age);
checkAge(people[1].name, people[1].age);
checkAge(people[2].name, people[2].age);
checkAge(people[3].name, people[3].age);

// Get Length Function - checks the length of a string, etc.

function getLength(word) {
  console.log(word.length);
}

getLength(myName);

// ----------------------

// Arrays

// An array of vegetables

const veggies = ["Asparagus", "Broccoli", "Spinach", "Kale"];

veggies.forEach((veggie, i) => {
  console.log(`${i + 1} : ${veggie}`);
});
