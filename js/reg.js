$(document).ready(function($){ 
  const form = document.querySelector('#registration-form');
  form.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = '@' + (document.querySelector('#username').value).replace(/[^\w]/gi, '').toLowerCase();
      const password = document.querySelector('#password').value;
      const userAge = document.querySelector('#userAge').value;
      const language = document.querySelector('#languageSelect').value;
      const userEmail = document.querySelector('#userEmail').value;
      const userFstLstNames = document.querySelector('#userFirstName').value + ' ' + document.querySelector('#userLastName').value;
      const user = {
        username: username,
        password: password,
        names: userFstLstNames,
        userAge: userAge,
        language: language,
        userEmail: userEmail
      }
      localStorage.setItem(username, JSON.stringify(user));
      alert('Registration successful!');
      form.reset();
  });
})