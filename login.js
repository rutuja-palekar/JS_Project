const txtUsername = document.getElementById('txtUsername');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');

function onLogin() {
    const username = txtUsername.value;
    const password = txtPassword.value;

    window.location.href = 'home.html?username=' + username + "&password=" + password
}

btnLogin.addEventListener('click', onLogin);