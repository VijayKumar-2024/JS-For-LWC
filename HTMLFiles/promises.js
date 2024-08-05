//Async
// It is for for performance of the applications & call backs can aslo be used situations

/// callback Hell
//when we met a nested multiple callback funcc with in a func

//2 ways
// promsies -> return something at a later time may be success op or error op
//Async / Await

function generatePromise(message) {
  return new Promise((resolve, reject) => {
    if (!message) {
      reject("message is empty");
    } else {
      setTimeout(() => {
        console.log(message);
        resolve();
      }, 1000);
    }
  });
}

// how to call the promise
// generatePromise("1st call")
//   .then(() => {
//     console.log("promise resolved ");
//     generatePromise("2nd call");
//   })
//   .then(() => {
//     console.log("second promise resolved");
//     generatePromise();
//   })
//   .then(() => {
//     console.log("promise is resolved");
//   })
//   .catch((error) => {
//     console.log("rejected promise", error);
//   });

//Async
// async function generateAsyncAwait() {
// try {
//     await generatePromise("1st call");
//     await generatePromise("2st call");
// } catch (error) {
//     console.log("error");
// }
// }
// generateAsyncAwait();

//promise.all
// aray of promises everything need to be resolve or error

function resolveTimeOut(value, delay) {
  return new Promise((resolve) => setTimeout(() => resolve(value), delay));
}
function rejectTimeOut(value, delay) {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject(value), delay)
  );
}

async function load() {
  let promise1 = resolveTimeOut("Welcome to Learn LWC", 5000);
  //   let promise2 = await resolveTimeOut("Promise 2 is working", 2000);
  let promise2 = rejectTimeOut("Loading Failed", 7000);
  try {
    let allPromise = await Promise.race([promise2, promise1]);
    console.log(allPromise);
  } catch (error) {
    console.log("error", error);
  }
}
load();
