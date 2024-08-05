function clickMe() {
  alert("Events");
}

function mouseoverhandler() {
  let element = document.querySelector(".hover");
  element.style.display = "none";
}

function mouseouthandler() {
  console.log("in");
  let element = document.querySelector(".hover");
  element.style.display = "";
  console.log("out");
}

function changeeventHandler(event) {
  console.log(event.target.value);
}

//handle the event
document.addEventListener("valueten", (event) => {
  console.log("Access EVent Data", event.detail.message);
});

function changeHandler(event) {
  console.log(event.target.value);
  let value = event.target.value;
  if (value == 10) {
    //create custom event
    const myevent = new CustomEvent("valueten", {
      detail: {
        message: "User entered value 10",
      },
    });
    //dispatch the event
    document.dispatchEvent(myevent);
    console.log(myevent);
  }
}

//setTimeout
let timeout = setTimeout(() => {
  console.log("setTimeout => Timeout is done ");
}, 5000);

//setInterval

let intervaltime = "";
intervaltime = setInterval(() => {
  console.log("setInterval => SetInterval is started !!");
}, 1000);
setTimeout(() => {
  clearInterval(intervaltime);
  console.log("Time interval is stoppeS");
}, 2000);
