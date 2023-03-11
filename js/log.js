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
                window.location.href = 'https://anywalkerjr.github.io/scripteld/scripteld.html';
                sessionStorage.setItem('currentUser', user.username);
            } else if (user.password != password) {
                alert('Invalid username or password.');
            }
        }
            
        form.reset();
    });
  })
