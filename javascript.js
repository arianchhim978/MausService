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