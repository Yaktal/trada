document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    // Perform validation or send data to the server
    if (username && password) {
        window.location.href = 'dashboard.html';
    } else {
        alert('Please enter both username and password');
    }

});
