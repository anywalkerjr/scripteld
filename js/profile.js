$(document).ready(function($){ 
    const user = sessionStorage.getItem('currentUser');
    const currentUser = JSON.parse(localStorage.getItem(user));
    const username = currentUser.username;
    const userAge = currentUser.userAge;
    const language =currentUser.language;
    const userEmail = currentUser.userEmail;
    const userNames = (currentUser.names).split(' ');
    const pfp = currentUser.profileImg;
    $('.profilePic').attr('src', pfp);
    $('#userFirstName').html(userNames[0]);
    $('#userLastName').html(userNames[1]);
    $('#username').html(username);
    $('#language').html(language);
    $('#userAge').html(userAge);
    $('#userEmail').html(userEmail);
    $('#logOut').click(function(){
      let sureOut = confirm('Are you sure? ');
      if(sureOut == true){
        sessionStorage.removeItem('currentUser');
        window.location.href = 'http://127.0.0.1:5500/project_6m/scripteld/scripteld.html';
      }
    })
    $('.warning').click(function(){
      let sureOut = confirm('Are you sure? ');
      if(sureOut == true){
        let pswconfirm = prompt('Write your password:')
        if (pswconfirm == currentUser.password)
          sessionStorage.removeItem('currentUser');
          localStorage.removeItem(user);
          window.location.href = 'http://127.0.0.1:5500/project_6m/scripteld/scripteld.html';
      }
    })
    $('#profilePicChange').on('click', function() {
      $('#profilePicInput').trigger('click');
    });
    $('#profilePicInput').on('change', function() {
      const file = $('#profilePicInput').prop('files')[0];
      const reader = new FileReader();
  
      reader.onload = function() {
        $('.profilePic').attr('src', reader.result);
        currentUser.profileImg = reader.result;
        localStorage.setItem(user, JSON.stringify(currentUser))
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
  })})