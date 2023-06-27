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
  firstname: /^[a-zA-Zа-яА-ЯғқәіөңұүӘӨҒҚҢҰҮ\d]{2,20}$/,
  secondname: /^[a-zA-Zа-яА-ЯғқәіөңұүӘӨҒҚҢҰҮ\d]{2,20}$/,
  email: /^[a-z\d\.-]+@[a-z\d-]+\.[a-z]{2,8}(\.[a-z]{2,8})?$/,
  tele: /\(?\+?[0-9]{0,3}\)? ?-?[0-9]{3,5} ?-?[0-9]{1,5} ?-?[0-9]{2,4}( ?-?[0-9]{2,4})/,
};

function validate(field, regex) {
  regex.test(field.value) ? (field.className = "valid") : (field.className = "invalid");
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
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
  let formattedDateEntered = dateEntered.toISOString().split("T")[0];
  document.getElementById("dateDeparture").min = formattedDateEntered;
});
