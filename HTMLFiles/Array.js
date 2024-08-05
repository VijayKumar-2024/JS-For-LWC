console.log("Array and Array Methods");
let mycars = ["Mahendera", "BMW", "Volvo", "Audi", "Maruthi"];
console.log(mycars);

//add element in array
//push
//unshift
//Spread operator
console.log(mycars.push("XUV 700"));
console.log(mycars);
let c = mycars.unshift("Scorpio");
console.log(c);
console.log(mycars);
let addnew = ["Tata", ...mycars, "Tesla", "Hyundai"];
console.log(addnew);

//remove a element from array
//pop(); -return removed element
//shift(); - remove 1st element in array
console.log(addnew);
console.log(addnew.pop());
console.log(addnew);
console.log(addnew.shift());
console.log(addnew);

//modify the element from array
//index
console.log((addnew[4] = "Honda"));
console.log(addnew);

//avoid duplicate of array to set
let arrayDuplicate = [
  "Mahendra",
  "Mahendera",
  "BMW",
  "Volvo",
  "Audi",
  "Maruthi",
  "Audi",
];
console.log(arrayDuplicate);
let avoidDuplicate = new Set(arrayDuplicate);
console.log(avoidDuplicate);

//search element
//indexOf
//includes

console.log(arrayDuplicate.includes("Audi"));

//convert array to string
//toString -> ','
//join
console.log(arrayDuplicate.toString());
console.log(arrayDuplicate.join("*"));

//splice -> will modify the original array
//slice -> Not modify original array

//splice => add/remove a element from array
// synatx splice(param 1,param2,rest)
//param1 -> position where new element will be added
//param2 -> how many elements needs to removed
//rest -> new element you have to add
//splice -> return the array of deleted elements

const fruits = ["Banana", "orange", "Mango"];
//add 2 fruits
let addedfruits = fruits.splice(2, 0, "kiwi", "apple");
console.log(fruits);
//remove 2 fruits
fruits.splice(0, 2);
console.log(fruits);

//slice -> extract the portion from array
//slice(param1,param2)
//param1-> indexof starting argument
//param2 -> indexof end argument +1

const names = ["amit", "ankit", "vijay", "kumar", "diva"];
let slicedArray = names.slice(0, 3);
console.log(slicedArray);
console.log(names);

//foreach
//dont have return function
names.forEach((currentitem, index, array) => {
  console.log(currentitem);
  console.log(index);
  console.log(array);
});

let numbeers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//map method
// has return function
let updatedArray = numbeers.map((currentitem, index, array) => {
  return currentitem / 10;
});
console.log(updatedArray);

let numbeers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//get all deposit
//filter - return true or false

let depositarray = numbeers1.filter((currentitem) => currentitem > 0);
console.log(depositarray);

let myfruits = ["fig", "apple", "cherry", "mango"];

let fruitses = myfruits.filter((currentitem) => currentitem.length > 3);
console.log(fruitses);

//find method
// always return one entery
let search = numbeers.find((currentitem) => {
  return currentitem === 10;
});
console.log(search);
