$(document).ready(function($){ 
    const user = sessionStorage.getItem('currentUser');
    const form = document.querySelector('#changePassword-form')
    const currentUser = JSON.parse(localStorage.getItem(user));
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const passwordVal = document.querySelector('#password').value;
        const newPassword = document.querySelector('#passwordNew').value;
        if(passwordVal === currentUser.password){
            currentUser.password = newPassword;
            localStorage.setItem(user, JSON.stringify(currentUser));
            alert('Successful changing password!');
            window.location.href = 'https://anywalkerjr.github.io/scripteld/scripteld.html';
        }else if(passwordVal != currentUser.password){
            alert('Incorrect password!')
        }
    })
})
