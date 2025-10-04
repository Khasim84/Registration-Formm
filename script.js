const style = document.createElement('style');
style.textContent = `
  body {
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(120deg, #f6d365, #fda085);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
  }

  .container {
    background: white;
    padding: 2em;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    width: 350px;
    text-align: center;
  }

  .container h2 {
    margin-bottom: 1em;
    color: #333;
  }

  form input {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 0.8em 0;
    border: 1px solid #ccc;
    border-radius: 6px;
    transition: border 0.3s ease;
  }

  form input:focus {
    border-color: #fda085;
    outline: none;
  }

  button {
    background-color: #fda085;
    color: white;
    border: none;
    padding: 10px 0;
    border-radius: 6px;
    width: 100%;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #f78b63;
  }

  .message {
    margin-top: 1em;
    font-weight: bold;
    color: red;
  }
`;
document.head.appendChild(style);
const users = [];

window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const messageEl = document.getElementById('formMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    messageEl.textContent = "";
    messageEl.style.color = "red";

    if (password !== confirmPassword) {
      messageEl.textContent = "❌ Passwords do not match.";
      return;
    }

    if (users.some(user => user.email === email)) {
      messageEl.textContent = "⚠️ Email is already registered.";
      return;
    }

    users.push({ fullname, email, password });

    messageEl.style.color = "green";
    messageEl.textContent = "✅ Registration successful!";

    form.reset();
  });
});    change the color for the above
