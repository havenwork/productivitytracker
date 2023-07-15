// Selecting form and input elements
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

// Function to display error messages
const showError = (field, errorText) => {
  field.classList.add("error");
  const errorElement = document.createElement("small");
  errorElement.classList.add("error-text");
  errorElement.innerText = errorText;
  field.closest(".form-group").appendChild(errorElement);
};

// Function to handle form submission
const handleFormData = (e) => {
  e.preventDefault();

  // Retrieving input elements
  const usernameInput = document.getElementById("username");

  // Getting trimmed values from input fields
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Regular expression patterns for email and phone number validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const phonePattern = /^\d{10}$/;

  // Clearing previous error messages
  document.querySelectorAll(".form-group .error").forEach((field) => field.classList.remove("error"));
  document.querySelectorAll(".error-text").forEach((errorText) => errorText.remove());

  // Performing validation checks
  if (username === "") {
    showError(usernameInput, "Enter your username");
  } else if (!emailPattern.test(username) && !phonePattern.test(username)) {
    showError(usernameInput, "Enter a valid email/phone number");
  }
  if (password === "") {
    showError(passwordInput, "Enter your password");
  }

  // Checking for any remaining errors before form submission
  const errorInputs = document.querySelectorAll(".form-group .error");
  if (errorInputs.length > 0) return;

  // Submitting the form
  form.submit();
};

// Toggling password visibility
passToggleBtn.addEventListener("click", () => {
  passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

// Handling form submission event
form.addEventListener("submit", handleFormData);
