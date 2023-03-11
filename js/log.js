let username;
let password;
$(document).ready(function($){ 
    const form = document.querySelector('#login-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        username = '@' + (document.querySelector('#username').value).replace(/[^\w]/gi, '').toLowerCase();
        password = document.querySelector('#password').value;
        const user = JSON.parse(localStorage.getItem(username));
        if(user == null){
            alert('Invalid username or password.');
        }else{
            if (user.password === password) {
                alert('Login successful!');
                window.location.href = 'http://127.0.0.1:5500/project_6m/scripteld/scripteld.html';
                sessionStorage.setItem('currentUser', user.username);
            } else if (user.password != password) {
                alert('Invalid username or password.');
            }
        }
            
        form.reset();
    });
  })