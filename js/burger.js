$(document).ready(function($) {
	let condition = true;
	function forwards() {
		anime({
			targets: '.leftMenu',
			translateX: [ '-50vw', '0' ],
			color: 'white',
			easing: 'easeInOutQuad',
			direction: 'alternate',
			duration: 700,
			loop: false
		});
		anime({
			targets: '.hburgerMenu',
			translateX: [ '-50vw', '0' ],
			color: 'white',
			easing: 'easeInOutQuad',
			direction: 'alternate',
			duration: 700,
			loop: false
		});

		anime({
			targets: '#stick1',
			translateY: '8px',
			rotate: '-225deg',
			easing: 'easeInOutQuad',
			direction: 'alternate',
			duration: 650,
			loop: false
		});
		anime({
			targets: '#stick2',
			opacity: 0,
			easing: 'easeInOutQuad',
			direction: 'alternate',
			duration: 650,
			loop: false
		});
		anime({
			targets: '#stick3',
			translateY: '-8px',
			rotate: '225deg',
			easing: 'easeInOutQuad',
			direction: 'alternate',
			duration: 650,
			loop: false
		});
		condition = false;
	}

	function backwards() {
		anime({
			targets: '.leftMenu',
			translateX: [ '0', '-50vw' ],
			easing: 'easeInOutQuad',
			direction: 'alternate',
			duration: 700,
			loop: false
		});
		anime({
			targets: '.hburgerMenu',
			translateX: [ '0', '-50vw' ],
			easing: 'easeInOutQuad',
			direction: 'alternate',
			duration: 700,
			loop: false
		});
		anime({
			targets: '#stick1',
			rotate: 0,
			translateY: '0px',
			translateX: '0px',
			easing: 'easeInOutQuad',
			direction: 'alternate',
			duration: 650,
			loop: false
		});
		anime({
			targets: '#stick2',
			opacity: 1,
			easing: 'easeInOutQuad',
			direction: 'alternate',
			duration: 650,
			loop: false
		});
		anime({
			targets: '#stick3',
			rotate: 0,
			translateY: '0px',
			translateX: '0px',
			easing: 'easeInOutQuad',
			direction: 'alternate',
			duration: 650,
			loop: false
		});
		condition = true;
	}

	$('.hburgerMenuIcon').click(function() {
		if (condition) {
			forwards();
		} else {
			backwards();
		}
	});

	let start = 0;
	let end = 0;
	$('body').on('touchstart', function(event) {
		start = event.originalEvent.touches[0].pageX;
	});
	$('body').on('touchend', function(event) {
		end = event.originalEvent.changedTouches[0].pageX;
		if (end - start >= 100 && condition) {
			forwards();
		} else if (start - end >= 100 && !condition) {
			backwards();
		}
	});
});
