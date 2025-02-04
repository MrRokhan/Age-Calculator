const calcBtn = document.getElementById("btn");
const dateOB = document.getElementById("dob");
const urAge = document.getElementById("ageResult");

function calcAge() {
  const birthdayValue = dateOB.value;
  if (birthdayValue === "") {
    alert("Enter your DOB");
  } else {
    const age = getAge(birthdayValue);
    urAge.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

// Correct event listener
calcBtn.addEventListener("click", calcAge);
