// Ensure the Telegram Web App object is available
if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;

    // Expand the mini app to full screen as soon as it loads (optional, but common)
    tg.expand();

    // Set the app's background color to match Telegram's theme (optional)
    // You can also get Telegram's current theme colors via tg.themeParams
    // tg.setBackgroundColor(tg.themeParams.bg_color || '#f0f0f0');

    // Get a reference to the button
    const showAlertButton = document.getElementById('show-alert-button');
    const userInfoParagraph = document.getElementById('user-info');

    // Add an event listener to the button
    showAlertButton.addEventListener('click', () => {
        // Use a Telegram Web App SDK method to show an alert
        tg.showAlert('Hello from your Telegram Mini App!');
    });

    // Display user information from Telegram (if available)
    // The initData contains user information, launch parameters, etc.
    if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        const user = tg.initDataUnsafe.user;
        userInfoParagraph.innerText = `Hello, ${user.first_name || 'User'}! Your ID is: ${user.id}`;
    } else {
        userInfoParagraph.innerText = 'Could not retrieve user info.';
    }

    // You can also use MainButton for a persistent button at the bottom
    // tg.MainButton.setText('Custom Main Button');
    // tg.MainButton.show();
    // tg.MainButton.onClick(() => {
    //     tg.sendData('Custom button clicked!'); // Send data back to your bot
    // });

} else {
    // Fallback for when the app is not running inside Telegram
    console.warn('Telegram Web App SDK not found. Running in a standard browser environment.');
    document.getElementById('user-info').innerText = 'This app is designed for Telegram.';
    // You might want to disable Telegram-specific features or show a different UI here
}