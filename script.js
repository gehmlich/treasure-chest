// Function to check the entered code
function checkCode() {
  var enteredCode = document.getElementById("codeInput").value;
  var correctCode = "8689420";

  if (enteredCode === correctCode) {
    document.getElementById("toggle-treasure").checked = true;
    closePopup();
  } else {
    alert("Der Code ist falsch. Bitte versuche es erneut.");
  }
}

// Function to open the popup
function openPopup() {
  document.getElementById("codePopup").style.display = "block";
}

// Function to close the popup
function closePopup() {
  document.getElementById("codePopup").style.display = "none";
}

// Get the input field
var input = document.getElementById("codeInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("submitBtn").click();
  }
});
