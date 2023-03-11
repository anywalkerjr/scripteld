$(document).click( function(event){
    if (event.target.className === 'view'){
        if ($('.passwordN').attr('type') === "password") {
            $('.passwordN').attr('type','text');
            $('img').attr('src','images/viewpsw.svg');
        } else {
            $('img').attr('src','images/icon_views.svg');
            $('.passwordN').attr('type','password');
            
        }
    }
})
