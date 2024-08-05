//export during declaration
export let weekdays = ["mon", "tue", "wed", "thu", "fri"];
export const DATE_OF_BIRTH = 2024;
export function sayHi(message) {
  console.log("sayHi to " + message);
}

// export after declaretion
function add(num1, num2) {
  console.log("Adding", num1 + num2);
}

export { add };
//default =>  should have only one default
export default function multi(num1, num2) {
  console.log("Multiplication", num1 * num2);
}
