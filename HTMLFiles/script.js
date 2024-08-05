console.log("objects , Spread Operators");
let obj = {
  fname: "Vijay",
  Lname: "kumar",
  age: 25,
  skills: ["Admin", "Apex Triggers", "LWC"],
};
console.log(obj);
console.log(typeof obj);

//Json.stingify : object into string
let jsonString = JSON.stringify(obj);

console.log(jsonString);

//Json.Parse : string to Object
let myObj = JSON.parse(jsonString);
console.log(myObj);

//acessing obj
obj.dob = "01/01/1999";
console.log(obj);

//[]--> when we have to populate property dynamically
myCountry = "country";
obj[myCountry] = "India";
console.log(obj);

//Spread Operator

let a1 = [1, 2, 3, 4];
let a2 = [5, 6, 7, 8, 9];
let a3 = [...a1, ...a2];
console.log("Spread Operator combing two array", a3);

let myname = "My name is";
console.log(myname);
console.log("Spread Operator to expand the string", ...myname); // breaking the string into characters

a4 = [...a1, 10, 11];
console.log(a4);

let myobj1 = {
  fmae: "vijay",
  skills: ["apex", "LWC"],
};
let myobj2 = {
  lname: "Kumar",
  city: "trichy",
};
let myobj3 = { ...myobj1, ...myobj2 };
console.log("Spread Operator combing two object", myobj3);

let a5 = [...a1];
console.log("Shallow copy ", a1);
console.log("Spread Operator copy of array", a5);

//destructuring the Array
let fruits = ["Apple", "Mango", "cherry", "Guava"];
let [f1, f2, f3] = fruits;
console.log(f1, f2, f3);

let [r1, , r2] = fruits;
console.log(r1, r2); // leaving the second index

let [u1, u2, ...u3] = fruits;
console.log(u1, u2, u3); //Rest Operator

let myDetails = {
  first: "Vj",
  last: "Kumar",
  age: 25,
  skills: ["Apex", "LWC"],
};
let { first, age, skills } = myDetails; //leaving last key object we can do it Obj but in Array , ,
console.log(first, age, skills[1]);
console.log(myDetails["first"]);
console.log((myDetails["domain"] = "LWC"));
console.log(myDetails);

let { first: FIRST, age: AGE, skills: SKILLS } = myDetails; // Renaming Obj
console.log(FIRST, AGE, SKILLS);

//String interpolation
let myString1 = "my name is";
let myString2 = "Vijay";
let calculate = 2024 - 1999;
let _age = "My age is";

let finalString = `${myString1} ${myString2} and my "age" is ${age}`;
console.log(finalString);

//Split method
let myinfo = "my name is vijay and you are ?";
let splittheString = myinfo.split(" ");
console.log(splittheString);
