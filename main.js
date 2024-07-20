let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let btn = document.querySelector(".btn");

let errorDay = document.getElementById("error-day");
let errorMonth = document.getElementById("error-month");
let errorYear = document.getElementById("error-year");
let result = document.querySelector(".result");

btn.addEventListener("click", function () {
  let dateNow = new Date();
  let birthday = new Date(year.value, month.value - 1, day.value);

  let isValid = true;
  if (day.value > 31) {
    errorDay.classList.add("error");
    errorDay.textContent = "الرقم أكبر من عدد أيام الشهر";
    day.style.borderColor = "red";
    isValid = false;
  } else if (day.value < 0) {
    errorDay.classList.add("error");
    errorDay.textContent = "لا يمكن ادخال رقم سالب";
    day.style.borderColor = "red";
    isValid = false;
  } else if (day.value === "") {
    errorDay.classList.add("error");
    errorDay.textContent = "يجب ملئ الحقل";
    day.style.borderColor = "red";
    isValid = false;
  } else {
    errorDay.classList.remove("error");
    errorDay.textContent = "";
    day.style.borderColor = "";
  }

  if (month.value > 12) {
    errorMonth.classList.add("error");
    errorMonth.textContent = "الرقم أكبر من عدد الشهر";
    month.style.borderColor = "red";
    isValid = false;
  } else if (month.value < 0) {
    errorMonth.classList.add("error");
    errorMonth.textContent = "لا يمكن ادخال رقم سالب";
    month.style.borderColor = "red";
    isValid = false;
  } else if (month.value === "") {
    errorMonth.classList.add("error");
    errorMonth.textContent = "يجب ملئ الحقل";
    month.style.borderColor = "red";
    isValid = false;
  } else {
    errorMonth.classList.remove("error");
    errorMonth.textContent = "";
    month.style.borderColor = "";
  }

  if (year.value > dateNow.getFullYear()) {
    errorYear.classList.add("error");
    errorYear.textContent = "الرقم أكبر من السنة الحالية ";
    year.style.borderColor = "red";
    isValid = false;
  } else if (year.value < 0) {
    errorYear.classList.add("error");
    errorYear.textContent = "لا يمكن ادخال رقم سالب";
    year.style.borderColor = "red";
    isValid = false;
  } else if (year.value === "") {
    errorYear.classList.add("error");
    errorYear.textContent = "يجب ملئ الحقل";
    year.style.borderColor = "red";
    isValid = false;
  } else {
    errorYear.classList.remove("error");
    errorYear.textContent = "";
    year.style.borderColor = "";
  }

  if (!isValid) {
    return;
  }

  let differentYear = dateNow.getFullYear() - birthday.getFullYear();
  let differentMonth = dateNow.getMonth() - birthday.getMonth();
  let differentDay = dateNow.getDate() - birthday.getDate();

  if (differentDay < 0) {
    differentDay += new Date(
      dateNow.getFullYear(),
      dateNow.getMonth(),
      0
    ).getDate();
    differentMonth--;
  }

  if (differentMonth < 0) {
    differentMonth += 12;
    differentYear--;
  }

  differentYear = differentYear.toString().padStart(2, "0");
  differentMonth = differentMonth.toString().padStart(2, "0");
  differentDay = differentDay.toString().padStart(2, "0");

  result.innerHTML = `
    <h2><span>${differentYear}</span> Years</h2>
    <h2><span>${differentMonth}</span> Months</h2>
    <h2><span>${differentDay}</span> Days</h2>
  `;
  clearData();
});

function clearData() {
  day.value = "";
  month.value = "";
  year.value = "";
}

function change() {
  btn.style.backgroundColor = "red";
  btn.classList.add("animation");
}
