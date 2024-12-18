document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const validUsername = 'Jayasimha';
  const validPassword = 'Jaya20@';

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const errorMessage = document.getElementById('errorMessage');

  // Validate the input
  if (username === validUsername && password === validPassword) {
    // Redirect to another page
    window.location.href = 'https://jayasimhadande.github.io/E-Commerce-Project/';
  } else {
    // Display error message
    errorMessage.textContent = "Invalid username or password. Please try again.";
    errorMessage.style.color = 'red'; // Set text color to red for emphasis
  }
});
