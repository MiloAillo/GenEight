const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const usernameForm = document.getElementById("username-form");

const switchToRegister = document.getElementById("switch-to-register");
const switchToLogin = document.getElementById("switch-to-login");
const formTitle = document.getElementById("form-title");

// Switch to Register Form
function switchToRegisterForm(e) {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
  usernameForm.style.display = "none";
  formTitle.textContent = "Buat Akun";
}

switchToRegisterForm()



// // Register Form Submission
// registerForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // Simulate successful registration
//   registerForm.style.display = "none";
//   usernameForm.style.display = "block";
//   formTitle.textContent = "Choose a Username";
// });

// // Final Username Submission
// usernameForm.addEventListener("submit", (e) => {
//   e.preventDefault();
  
//   const newUsername = document.getElementById("new-username").value;
//   alert("Username set to: " + newUsername);

//   // After confirmation, you can redirect or go back to login
//   usernameForm.style.display = "none";
//   loginForm.style.display = "block";
//   formTitle.textContent = "Login";
// });

////////
