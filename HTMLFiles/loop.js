console.log("Loops & Collections");

let arr = ["BMW", "Audi", "Porshe", "Maruti"];

for (let i = 0; i < arr.length; i++) {
  console.log(`${i + 1}. ${arr[i]}`);
}

//for of
for (let arr1 of arr) {
  console.log(arr1);
}

for (let arr1 of arr.entries()) {
  // entries with the index
  console.log("entries with index ", arr1);
}

//for Objects
let myDetails = {
  first: "Vj",
  last: "Kumar",
  age: 25,
  skills: ["Apex", "LWC"],
};

// to iterate a obj 3 method
//obj.keys
//obj.vaues
//obj.entries

for (md of Object.entries(myDetails)) {
  console.log(md);
}
//or

for ([key, value] of Object.entries(myDetails)) {
  console.log(key, value);
}

//for in array

for (let fi in arr) {
  console.log("for in loop", fi, arr[fi]);
}

//for in Object

for (let md in myDetails) {
  console.log("folr in object", myDetails[md]);
}

let openingHours = {
  monday: { open: "9 AM", close: "6 PM" },
  tuesday: { open: "9 AM", close: "6 PM" },
  wednesday: { open: "9 AM", close: "6 PM" },
  thursday: { open: "9 AM", close: "6 PM" },
  friday: { open: "9 AM", close: "6 PM" },
  saturday: { open: "10 AM", close: "5 PM" },
};
for (currenttime in openingHours) {
  console.log(openingHours[currenttime]); //keys and value
  let { open, close } = openingHours[currenttime]; //destructing
  console.log(open, close);
  console.log(`${currenttime}, opens at ${open} close at ${close}`);
}

for (let [day, { open, close }] of Object.entries(openingHours)) {
  console.log(day, open, close);
  console.log(`${day}, opens at ${open} close at ${close}`);
}
