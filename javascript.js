const buttons = document.querySelectorAll('button');

function highlightButton(clickedButton) {
    // Loop through all buttons
    buttons.forEach(button => {
        // Toggle the "checked" class for the clicked button
        if (button === clickedButton) {
            button.classList.toggle('checked');
        } else {
            // Remove the "checked" class from all other buttons
            button.classList.remove('checked');
        }
    });
}

// Get the checkbox element
var billingToggle = document.getElementById("billing-toggle");

// Add event listener to detect changes in checkbox state
billingToggle.addEventListener("change", function() {
  // Get the pricing elements
  var monthlyPricing = document.querySelector("#box2 .b");
  var yearlyPricing = document.querySelector("#box2 .k");
  var classB = document.querySelector("#box3 .b");

  // If the checkbox is checked, show yearly pricing and hide monthly pricing
  if (billingToggle.checked) {
    monthlyPricing.textContent = "$199 /  Yearly"; classB.textContent = "$900/ Yearly";

  } else {
    // If the checkbox is not checked, show monthly pricing and hide yearly pricing
    monthlyPricing.textContent = "$19 / Month";
    classB.textContent = "$99/Month" // Set monthly pricing
   
  }
});

let mausSelect = document.getElementById("#maus-select");
const monthlyToggle = document.getElementById("#monthly-toggle")
const yearlyToggle = document.getElementById("#yearly-toggle")




