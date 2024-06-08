import validator from "validator";
import isEmail from "validator/lib/isEmail";
import "./scss/style.scss";
import "./typeScales.css";
import "./assets/fonts/stylesheet.css";

const form = document.getElementById("form");
const emailInput = document.getElementById("emailInput");
const emailStatus = document.querySelector(".form__label");
const toggleTheme = document.getElementById("themeToggle");
const footerYear = document.getElementById("year");

footerYear.textContent = new Date().getFullYear();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validator.isEmail(emailInput.value)) {
    emailStatus.textContent = "Please enter a valid email!";
    emailStatus.classList.add("status-error");
    emailStatus.classList.remove("status-valid");
  } else {
    emailStatus.textContent = "Success!";
    emailStatus.classList.add("status-valid");
    emailStatus.classList.remove("status-error");
  }
});

toggleTheme.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.classList.toggle("body-dark");

  const toggleIcon = document.getElementById("toggleIcon");
  if (body.classList.contains("body-dark")) {
    toggleIcon.classList.add("bi-brightness-high");
    toggleIcon.classList.remove("bi-moon");
  } else {
    toggleIcon.classList.remove("bi-brightness-high");
    toggleIcon.classList.add("bi-moon");
  }
});
