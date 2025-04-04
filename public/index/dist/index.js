import initGuest from "./guest.js";


const loginButton = document.getElementById("login-btn");
const signupButton = document.getElementById("signup-btn");
const googleLoginButton = document.getElementById("google-login-btn");
const googleSignUpButton = document.getElementById("google-signup-btn");

initGuest()

document.querySelectorAll('.tab').forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.getAttribute('data-tab');

        document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(tab).classList.add('active');
    });
});