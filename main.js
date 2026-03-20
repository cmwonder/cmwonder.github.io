document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton'); // Change 'myButton' to the actual ID of your button
    if (button) {
        button.addEventListener('click', function() {
            console.log('Button was clicked!');
        });
    }
});