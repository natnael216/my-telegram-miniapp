// This code runs once the entire HTML document is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get references to our HTML elements by their IDs
    const actionButton = document.getElementById('actionButton');
    const messageDisplay = document.getElementById('messageDisplay');

    // Check if the button exists before trying to add an event listener
    if (actionButton) {
        // Add a click event listener to the button
        actionButton.addEventListener('click', () => {
            // When the button is clicked, update the message display
            messageDisplay.textContent = 'Action performed! This is interactive!';
            // You could add more complex logic here, like making API calls,
            // or interacting with the Telegram Web App SDK (added in Step 4 of the main guide).
            console.log('Button was clicked!');
        });
    } else {
        console.error('Error: Button with ID "actionButton" not found.');
    }
});