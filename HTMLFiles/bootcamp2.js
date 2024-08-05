/*
Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.

Example:
Input: "hello world"
Output: "Hello World

Problem 2:
Write a function that takes a string as input and returns the reverse of the string, maintaining the case of each character.

Example:
Input: "Hello World"
Output: "dlroW olleH"

Write a function that takes a string as input and returns the number of occurrences of each character in the string as an object.

Example:
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }

Write a function that generate the username of the user based on Firstname, Middlename and Lastname
Input - ankit Dilipji Jain
Output - ADJ

Write a function that takes an array of numbers as input and returns a new array with all the even numbers removed.

Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [1, 3, 5]

Problem :
Write a function that takes an array of strings as input and returns a new array with only the strings that have a 
length greater than or equal to 5.

Example:
Input: ["apple", "banana", "grape", "orange", "kiwi"]
Output: ["apple", "banana", "orange"]

Write a function that takes an array of numbers as input and returns a new array with only the unique elements (remove duplicates).

Example:
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]
*/

// Example:
// Input: "hello world"
// Output: "Hello World

function covertUpperCase(words) {
  //   console.log(words);
  let x = words.split(" ");
  let UpperCaseFirst = [];
  // console.log(x[0].toUpperCase());
  x.forEach((word) => {
    // console.log(word);
    UpperCaseFirst.push(word[0].toUpperCase() + word.slice(1));
    let ts = UpperCaseFirst.toString();
  });
  console.log(UpperCaseFirst.join(" "));
}

covertUpperCase("hello world");

// Example:
// Input: "Hello World"
// Output: "dlroW olleH"

function reverseString(message) {
  let splitString = message.split("");
  //   console.log(splitString.reverse().join(""));
  let newValue = [];
  console.log(splitString);
  splitString.forEach((currentItem) => {
    let original = currentItem;
    newValue.unshift(original);
  });
  console.log("newValue => ", newValue.join(""));
}
reverseString("Hello World");

// Example:
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }

function Occurance(message) {
  let result = {};
  let x = message.split("");
  console.log(x);
  x.forEach((word) => {
    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word] += 1;
    }
  });
  console.log(result);
}
Occurance("hello");

// Input - ankit Dilipji Jain
// Output - ADJ
function FirstLetteronly(words) {
  let x = words.split(" ");
  let UpperCaseFirst = [];
  x.forEach((word) => {
    UpperCaseFirst.push(word[0].toUpperCase());
    let ts = UpperCaseFirst.toString();
  });
  console.log(UpperCaseFirst.join(""));
}
FirstLetteronly("hello world vijay");

// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [1, 3, 5]

let arraynum = [1, 2, 3, 4, 5, 6];
console.log(arraynum);
let arr = [];
arraynum.forEach((currentitem) => {
  if (currentitem % 2) {
    console.log(currentitem);
    arr.push(currentitem);
  }
  console.log(arr);
});

// Input: ["apple", "banana", "grape", "orange", "kiwi"]
// Output: ["apple", "banana", "orange"]
let myfruits = ["apple", "banana", "grape", "orange", "kiwi"];

let fruitses = myfruits.filter((currentitem) => currentitem.length >= 5);
console.log(fruitses);

// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]
let arr2 = [1, 2, 2, 3, 4, 4, 5];
let arr3 = new Set();
arr2.forEach((currentItem) => {
  let avoidduplicate = arr3.add(currentItem);
  //   console.log(avoidduplicate);
});
console.log(arr3);
// let arrayName = Array.from(arr3);
let arrayN = [...arr3];
console.log(arrayN);
