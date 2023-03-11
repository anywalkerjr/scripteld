
$(document).ready(function() {
    anime({
        targets: 'body',
        opacity: [0,1],
        duration: 600,
        easing: 'easeInOutQuint',
    });
    if(sessionStorage.getItem('theme') != undefined){
        const theme = sessionStorage.getItem('theme');
        if(theme == 'white'){
            $('#cssLink').attr('href', $('#cssLink').attr('href').replace('black',  theme))
            $('.notification').attr('src', 'images/icon_notification_whiteTheme.svg')
        }else{
            $('#cssLink').attr('href', $('#cssLink').attr('href').replace('white',  theme));
            $('.notification').attr('src', 'images/icon_notification.svg')
        };
    }
    $('#changeTheme').on('click', function(){
        if($('#cssLink').attr('href').includes("white") == true){
            $('#cssLink').attr('href', $('#cssLink').attr('href').replace('white', 'black'));
            $('.notification').attr('src', 'images/icon_notification.svg')
            sessionStorage.setItem('theme', 'black');
        }else{
            $('#cssLink').attr('href', $('#cssLink').attr('href').replace('black',  'white'));
            $('.notification').attr('src', 'images/icon_notification_whiteTheme.svg')
            sessionStorage.setItem('theme', 'white');
        };
        anime({
            targets: 'body',
            opacity: [0.1,1],
            duration: 600,
            easing: 'easeInOutQuint',
        });
        if($('#cssLink').attr('href').includes("white") == true){
            anime({
              targets: '.subdBtn',
              backgroundColor: '#2B308B',
              color: '#fff',
              fontWeight: '700',
              fontSize: '20px',
            });
            anime({
                targets: '.subBtn',
                backgroundColor: '#fff',
                color: '#4047CF',
                fontWeight: '400',
                fontSize: '18px',
              });
          }else{
            anime({
              targets: '.subdBtn',
              backgroundColor: '#990a08',
              color: '#fff',
              fontWeight: '700',
              fontSize: '20px',
            });
            anime({
                targets: '.subBtn',
                backgroundColor: '#0d1818',
                color: '#fff',
                fontWeight: '400',
                fontSize: '18px',
              });
          };
    })
})
