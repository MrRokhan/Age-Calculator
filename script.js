const calcBtn = document.getElementById("btn");
const dateOB = document.getElementById("dob");
const urAge = document.getElementById("ageResult");

function calcAge() {
  const birthdayValue = dateOB.value;
  if (birthdayValue === "") {
    alert("enter your dob");
  } else {
    const age = getAge(birthdayValue);
    urAge.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}
