//Example 1: Basic Object Destructuring

// Original Object
const person = { name: "John", age: 30, city: "New York" };

// Object Destructuring
const { name, age, city } = person;

// Using the extracted values
console.log(name); // "John"
console.log(age);  // 30
console.log(city); // "New York"

//Example 2: Nested Object Destructuring

// Original Object with nested structure
const student = {
  name: "Alice",
  info: {
    age: 25,
    grade: "A",
    address: { city: "Los Angeles", zip: "90001" },
  },
};

// Nested Object Destructuring
const { name, info: { age, grade, address: { city, zip } } } = student;

// Using the extracted values
console.log(name);  // "Alice"
console.log(age);   // 25
console.log(grade); // "A"
console.log(city);  // "Los Angeles"
console.log(zip);   // "90001"

//Example 3: Default Values

// Original Object
const book = { title: "JavaScript 101", author: "Jane Doe" };

// Object Destructuring with Default Values
const { title, author, genre = "Unknown" } = book;

// Using the extracted values
console.log(title);  // "JavaScript 101"
console.log(author); // "Jane Doe"
console.log(genre);  // "Unknown" (default value because 'genre' is not present in the original object)

//Example 4: Alias for Extracted Properties

// Original Object
const car = { make: "Toyota", model: "Camry", year: 2022 };

// Object Destructuring with Aliases
const { make: carMake, model: carModel, year: carYear } = car;

// Using the extracted values with aliases
console.log(carMake);  // "Toyota"
console.log(carModel); // "Camry"
console.log(carYear);  // 2022
