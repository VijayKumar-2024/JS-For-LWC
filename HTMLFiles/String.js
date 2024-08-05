console.log("String Methods");
let myString1 = "My name is Vijay";
console.log(myString1);
console.log(myString1.length);

//Extraction from Strings

let favfruits = "Apple,Mango,grapes";
console.log(favfruits);

//slice(start position, end position+1) (end position is not included)
//substring(start,end)
//substr(start position,length)

let sliceBanana = favfruits.slice(6, 11);
console.log(sliceBanana);

//slice with negative start position
let SliceWithNegative = favfruits.slice(-6);
console.log(SliceWithNegative);

//substring(start,end)
//in substring if we pass negative value position it will treated as 0

let subStringBanana = favfruits.substring(6, 11);
console.log(subStringBanana);

//in substring if we pass negative value position it will treated as 0
let SubstringWithNegative = favfruits.substring(-6);
console.log(SubstringWithNegative); //complete string value

//substr(start position,length)
//substr is deprecated in ES6
let subStr = favfruits.substr(6, 5);

const numbers = [33, 2, 8];
console.log(numbers.sort((a, b) => a + b));
console.log(numbers[1]); //33

//replace
// replace will only replace the first match like ( 2 banana in a array or string it will rplce only 1stmatch)
//replace is a case sensitive
//replace will not modify existing string

let newFruitisReplaced = favfruits.replace("Mango", "Banana");
console.log(newFruitisReplaced);
console.log(favfruits);

//upper and lower case
console.log(myString1.toUpperCase());
console.log(myString1.toLowerCase());

//concat
let text1 = "Hello";
let text2 = "Vijay";
console.log(`${text1} ${text2}`);

//trim()
//trimStart()
//trimEnd()

let xyz = "                   Hello    World";
console.log(xyz.trim()); // cuts the prefix and suffic space
console.log(xyz.trimEnd());
console.log(xyz.trimStart());

//padStart, PadEnd
let mynumber = "5";
console.log(mynumber.padStart(5, "*"));
console.log(mynumber.padEnd(5, "*"));

//split
//split method will always return an array
let mycsVfile = "amit,ankit,vijay,kumar,diva";
let csvArray = mycsVfile.split(" ");
console.log(csvArray);
console.log(mycsVfile.split(""));
console.log(mycsVfile.split(","));
console.log(mycsVfile.split(" ,"));
console.log(mycsVfile.split(", "));

//Convert Array to String
//toString

let myToString = csvArray.toString();
console.log("mytoString", myToString);

//join

let joinastring = csvArray.join("*");
console.log("Join A String", joinastring);

//Search the string
//indexOf -- return the index position of a string
//includes -- retur true or false

let indexOffavfruits = favfruits.indexOf("Mango");
console.log(indexOffavfruits);
console.log(favfruits.indexOf("Banana")); // value is not there it will be -1
console.log(favfruits.includes("Apple"));

//startsWith() -- returns true or false
//endsWith()
console.log(favfruits);
console.log(favfruits.startsWith("Apple"));
console.log(favfruits.endsWith("grapes"));

//1. avoid duplicate in array
//break the string into array
//convert into set
//combine the set -- join
let mycsV = "amit.ankit.vijay.kumar.diva";
console.log(mycsV.split("i"));
let arrayDuplicate = "Hello World World Hello";

let avoidDuplicate = arrayDuplicate.split(" ");
console.log(avoidDuplicate);
let finalarray = [];
avoidDuplicate.map((c) => {
  console.log("c => ", c);
  console.log("finalarray => ", finalarray);
  if (!finalarray.includes(c)) {
    console.log("...finalarray => ", ...finalarray);
    // finalarray.push(c);
    finalarray = [...finalarray, c];
    console.log("finalarray => ", finalarray);
  }
});
console.log(finalarray.join("*"));
