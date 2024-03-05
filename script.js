// Function to check the entered code
function checkCode() {
  var enteredCode = document.getElementById("codeInput").value;
  var correctCode = "8689420";

  if (enteredCode === correctCode) {
    document.getElementById("toggle-treasure").checked = true;
    addTopImage();
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

// Function to add an image on top of the application
function addTopImage() {
  // Create the image container
  var imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  // Create the image element
  var topImage = document.createElement("img");
  topImage.src = "map.png";
  topImage.classList.add("top-image");
  topImage.style.animation = "flyIn 1s ease-in"; // Add fly-in animation

  // Create the centered text element
  var centeredText = document.createElement("div");
  centeredText.classList.add("centered-text");
  centeredText.textContent =
    "Herzlichen Glückwunsch! Du hast alle Rätsel gelöst.";

  // Append the image and text elements to the container
  imageContainer.appendChild(topImage);
  imageContainer.appendChild(centeredText);

  // Append the container to the document body
  document.body.appendChild(imageContainer);

  // Wait for the flyIn animation to finish
  topImage.addEventListener("animationend", function () {
    // Add the fadeInText animation after flyIn animation is done
    centeredText.style.animation = "fadeInText 1s ease-in";
    centeredText.style.opacity = 1; // Set opacity to 1 to start the fadeInText animation
    // Trigger confetti effect
    confetti({
      particleCount: 600,
      spread: 100,
      origin: { y: 0.7, x: 0.63 },
    });
  });
}
