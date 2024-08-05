//function decleration
function cal(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
  return sum;
}

//function Expression it is only recomended in modern js
let calc2 = function (num1, num2) {
  if (num2) {
    let sum = num1 + num2;
    console.log(sum);
    return sum;
  } else {
    return num1;
  }
};
cal(1, 2);
calc2(3, 1);

let greet = function (message) {
  return `${message} Welcome to Learn LWC`;
};
console.log(greet("vj"));

//Arrow function
let greeting = (message) => {
  return `${message} You are a LWC DEVELOPER`;
};
console.log(greeting("Vijay"));

let calc3 = (num1, num2) => {
  if (num2) {
    let sum = num1 + num2;
    console.log(sum);
    return sum;
  } else {
    return num1;
  }
};

calc3(1, 5);

//callback functions
//call back function accept another function as parameter

function WelcomeMe(names, callMe) {
  console.log(`${names}, Welcome to bootcamp`);
  callMe();
}
function greetMe() {
  console.log("Hi new to LWC");
}
function Congrats() {
  console.log("Hi you can doit by LWC");
}
WelcomeMe("vijay", greetMe);

setTimeout(() => {
  greetMe; // call back function accept another function as parameter
}, 1000);
