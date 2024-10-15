function showPassword() {
  let hideButton = document.getElementById("password");

  // Check the type of the input and toggle it
  if (hideButton.type === "password") {
    hideButton.type = "text";  // Show password
  } else {
    hideButton.type = "password";  // Hide password
  }
}
