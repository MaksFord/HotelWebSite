window.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedRoom = urlParams.get("selectedRoom");
  const roomInput = document.getElementById(selectedRoom);

  if (roomInput) {
    roomInput.checked = true;
  }
});

// validation script here

const inputs = document.querySelectorAll("input[type='text'], input[type='email'], input[type='tel']");
const patterns = {
  firstname: /^[a-zA-Zа-яА-ЯғқәіөңұүӘӨҒҚҢҰҮ]{2,20}$/,
  secondname: /^[a-zA-Zа-яА-ЯғқәіөңұүӘӨҒҚҢҰҮ]{2,20}$/,
  email: /^[a-z\d\.-]+@[a-z\d-]+\.[a-z]{2,8}(\.[a-z]{2,8})?$/,
  tele: /\(?\+?[0-9]{0,3}\)? ?-?[0-9]{3,5} ?-?[0-9]{1,5} ?-?[0-9]{2,4}( ?-?[0-9]{2,4})/,
};

function validate(field, regex) {
  regex.test(field.value) ? (field.className = "valid") : (field.className = "invalid");
}

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    //console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

//date manipulation
// Get the current date
const currentDate = new Date();
// Format the current date as YYYY-MM-DD
const formattedDate = currentDate.toISOString().split("T")[0];
// Set the formatted date as the value of the min attribute
document.getElementById("dateArrival").min = formattedDate;

document.getElementById("dateArrival").addEventListener("change", function () {
  let input = this.value;
  let dateEntered = new Date(input);
  //date validation
  if (this.value !== "") {
    this.className = "valid";
  } else {
    this.className = "invalid";
  }
  let formattedDateEntered = dateEntered.toISOString().split("T")[0];
  document.getElementById("dateDeparture").min = formattedDateEntered;
  //date validation
});

//date departure validation
document.getElementById("dateDeparture").addEventListener("change", function () {
  if (this.value !== "") {
    this.className = "valid";
  } else {
    this.className = "invalid";
  }
});
document.getElementById("halfStay").addEventListener("change", function () {
  if (this.checked) {
    this.className = "valid";
  } else {
    this.className = "invalid";
  }
});

document.getElementById("sendForm").addEventListener("click", (e) => validateInput());
//BUTTON ACTIVATION (ALL FIELDS ARE FILLED)
function validateInput() {
  if (
    document.getElementById("name").className === "valid" &&
    document.getElementById("surname").className === "valid" &&
    document.getElementById("email").className === "valid" &&
    document.getElementById("phoneNumber").className === "valid" &&
    document.getElementById("dateArrival").className === "valid" &&
    (document.getElementById("halfStay").className === "valid" ||
      document.getElementById("dateDeparture").className === "valid")
  ) {
    alert("everything is ok");
  } else {
    alert("fill the rest of fields");
  }
}
