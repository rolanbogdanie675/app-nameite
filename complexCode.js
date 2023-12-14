/***************************************************************
 * Filename:  complexCode.js
 * Description: A complex and sophisticated JavaScript code example
 * Author: [Your Name]
 * Date: [Current Date]
 ***************************************************************/

// Create a class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet the person
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create an instance of the Person class
const john = new Person("John Doe", 25);
john.greet();

// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }

  return true;
}

// Function to generate a Fibonacci sequence
function fibonacci(n) {
  const sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

// Perform some calculations and display the results
const number = 26;
console.log(`Is ${number} prime?`, isPrime(number));

const fibonacciSequence = fibonacci(10);
console.log("Fibonacci Sequence:", fibonacciSequence);

// Generate a random number within a range
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Display a random number between 1 and 10
const randomNum = randomInRange(1, 10);
console.log("Random Number:", randomNum);

// Example of async/await function
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function asyncFunction() {
  console.log("Async function started");
  await delay(2000);
  console.log("Async function finished");
}

asyncFunction();

// Fetch data from an API using Fetch API
const apiUrl = "https://jsonplaceholder.typicode.com/posts";
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => console.log("API Data:", data))
  .catch((error) => console.error("API Error:", error));

// Define a recursive function to calculate factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;

  return n * factorial(n - 1);
}

// Display factorial of a number
const factorialNum = 5;
console.log(`Factorial of ${factorialNum}:`, factorial(factorialNum));

// Implement a sorting algorithm (Bubble Sort)
function bubbleSort(arr) {
  const len = arr.length;

  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        const temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

// Test bubble sort on an array
const unsortedArray = [9, 5, 1, 8, 2, 7, 4, 6, 3];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted Array:", sortedArray);

// Create a higher-order function to add two numbers
function add(a) {
  return function (b) {
    return a + b;
  };
}

// Perform addition using the higher-order function
const result = add(5)(7);
console.log("Addition Result:", result);

// Another complex and sophisticated code example...
// [Add your own code here]

// ...

// End of code
console.log("End of code");