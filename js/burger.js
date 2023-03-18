$(document).ready(function($){ 
    let condition = true;
    function forwards() {
        anime({
            targets: '.hburgerMenu',
            translateX: ['-50vw', '0'],
            color: 'white',
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 700,
            loop: false
        });

        anime({
            targets: '.hburgerMenuIcon',
            rotate: 90,
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 500,
            loop: false
        });
        anime({
            targets: '.stickHburger',
            rotate: -90,
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 1000,
            loop: false
        });
        condition = false
    }

    function backwards() {
        anime({
            targets: '.hburgerMenu',
            translateX: ['0', '-50vw'],
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 700,
            loop: false
        });
        anime({
            targets: '.hburgerMenuIcon',
            rotate: 0,
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 500,
            loop: false
        });
        anime({
            targets: '.stickHburger',
            rotate: 0,
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 1000,
            loop: false
        });
        condition = true;
    }

    $('.hburgerMenuIcon').click(function () {
        if (condition) {
            forwards();
        } else {
            backwards();
        }
    });

    let start = 0;
    let end = 0;
    $('body').on('touchstart', function (event) {
        start = event.originalEvent.touches[0].pageX;
    })
    $('body').on('touchend', function (event) {
        end = event.originalEvent.changedTouches[0].pageX;
        if (end - start >= 100 && condition) {
            forwards();
        } else if (start - end >= 100 && !condition) {
            backwards();
        }
    });
})