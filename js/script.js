let btnNumber;
let btnNumberFav;
$(document).ready(function($){
  $('.subBtn').each(function(index) {
    $(this).attr('id', 'subBtn' + index);
  });
  $('.favBtn').each(function(index) {
    $(this).attr('id', 'favBtn' + index);
  });
    const currentUser = sessionStorage.getItem('currentUser');
      if(currentUser != undefined){
        const names = JSON.parse(localStorage.getItem(currentUser)).names;
        const pfp = JSON.parse(localStorage.getItem(currentUser)).profileImg;
        $('header').html('<a href="scripteld.html"><h2>scripteld</h2></a><div class="profileIn"><a href="postCreating.html"><input type="button" class="postMake" value="Publish"></a><img class="notification" style="position: relative;" src="images/icon_notification.svg"><h3><a href="profile.html">'+ names +'</a></h3><a href="profile.html"><img class="profileP" src="images/no-image-v2-500x383@2x.jpg"></a></div>');
        $('.profileP').attr('src', pfp);
      };

    $('body').on("click",function(event){
        if(event.target.className == 'subBtn' && (currentUser != null || currentUser != undefined)){
            btnNumber = '#' + event.target.id;
            $(btnNumber).val('Subscribed');
            if($('#cssLink').attr('href').includes("white") == true){
              anime({
                targets: btnNumber,
                backgroundColor: '#2B308B',
                color: '#fff',
                fontWeight: '700',
                fontSize: '20px',
              });
            }else{
              anime({
                targets: btnNumber,
                backgroundColor: '#990a08',
                color: '#fff',
                fontWeight: '700',
                fontSize: '20px',
              });
            };
            event.target.className = 'subdBtn';
        }else if(event.target.className == 'subdBtn' && (currentUser != null || currentUser != undefined)){
          btnNumber = '#' + event.target.id;
          $(btnNumber).val('Subscribe');
          if($('#cssLink').attr('href').includes("white") == true){
            anime({
              targets: btnNumber,
              backgroundColor: '#fff',
              color: '#4047CF',
              fontWeight: '400',
              fontSize: '18px',
            });
          }else{
            anime({
              targets: btnNumber,
              backgroundColor: '#0d1818',
              color: '#fff',
              fontWeight: '400',
              fontSize: '18px',
            });
          };
          event.target.className = 'subBtn';
        }else if(event.target.className == 'subBtn' && (currentUser == null || currentUser == undefined)){
          alert('You need to login!')
        };
        if(event.target.className == 'favBtn' && (currentUser != null || currentUser != undefined)){
          btnNumberFav = '#' + event.target.id;
          $(btnNumberFav).attr('src', 'images/icon_favorite_liked.svg');
          anime({
            targets: btnNumberFav,
            scale: [1.2, 1.05],
            duration: 200,
            easing: 'easeOutBack'
          });
          event.target.className = 'favLkBtn';
        }else if(event.target.className == 'favLkBtn' && (currentUser != null || currentUser != undefined)){
          btnNumberFav = '#' + event.target.id;
          $(btnNumberFav).attr('src', 'images/icon_favorite.svg');
          anime({
            targets: btnNumberFav,
            scale: [0.9, 1],
            duration: 200,
            easing: 'easeOutBack'
          });
          event.target.className = 'favBtn';
        }else if(event.target.className == 'favBtn' && (currentUser == null || currentUser == undefined)){
          alert('You need to login!')
        };
    })
  });
