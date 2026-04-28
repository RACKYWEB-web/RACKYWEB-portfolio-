function showMessage() {
  let name = document.getElementById("username");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");

  let cleanName = name.value.trim();
  let cleanEmail = email.value.trim();
  let cleanPassword = password.value.trim();

  // Reset
  nameError.innerText = "";
  emailError.innerText = "";
  passwordError.innerText = "";

  name.classList.remove("error", "success");
  email.classList.remove("error", "success");
  password.classList.remove("error", "success");

  let isValid = true;

  // NAME
  if (cleanName === "") {
    nameError.innerText = "Name is required";
    name.classList.add("error");
    isValid = false;
  } else if (cleanName.length < 3) {
    nameError.innerText = "Name too short";
    name.classList.add("error");
    isValid = false;
  } else if (/\d/.test(cleanName)) {
    nameError.innerText = "No numbers allowed";
    name.classList.add("error");
    isValid = false;
  } else {
    name.classList.add("success");
  }

  // EMAIL
  if (cleanEmail === "") {
    emailError.innerText = "Email is required";
    email.classList.add("error");
    isValid = false;
  } else if (!cleanEmail.includes("@") || !cleanEmail.includes(".")) {
    emailError.innerText = "Invalid email";
    email.classList.add("error");
    isValid = false;
  } else {
    email.classList.add("success");
  }

  // PASSWORD
  if (cleanPassword === "") {
    passwordError.innerText = "Password required";
    password.classList.add("error");
    isValid = false;
  } else if (cleanPassword.length < 6) {
    passwordError.innerText = "Min 6 characters";
    password.classList.add("error");
    isValid = false;
  } else {
    password.classList.add("success");
  }

  // SUCCESS

if (isValid) {
  localStorage.setItem("username", cleanName);
  window.location.href = "dashboard.html";
  }
}
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}
