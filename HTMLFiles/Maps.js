console.log("Maps/SetCollections");

let myMap = new Map();

myMap.set(1, "one");
myMap.set(2, "two");
myMap.set(3, "three");
myMap.set("string", 1);
myMap.set(true, "stringvalue");
console.log(myMap);
console.log(myMap.get(3));
console.log(myMap.size); //no () it is property

let favplaces = new Map([
  ["Trichy", "chruch"],
  ["Hosur", "Tea"],
  ["Pune", "fort"],
]);
console.log(favplaces);

for (let [key, value] of favplaces) {
  console.log(key, value);
}

//Set stor only unique values
let myset = new Set();
myset.add("Burger");
myset.add("Tea");
myset.add("Pizza");
myset.add("Burger");
console.log(myset.has("burger")); // case sensitive
console.log("mySet", myset);
myset.delete("Burger");
console.log("mySet", myset);

let favcity = new Set(["Pune", "Trichy", "Rameshwaram"]);
console.log(favcity);
for (let fc of favcity) {
  console.log(fc);
}
