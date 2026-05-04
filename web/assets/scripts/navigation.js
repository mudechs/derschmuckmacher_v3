var nav = document.querySelector('.dynamic-head-navigation');

if (nav != null) {
	var navHeight = 78;

	// the point the scroll starts from (in px)
	var lastScrollY = 0;
	// how far to scroll (in px) before triggering
	var delta = 20;

// function to run on scrolling
	function scrolled() {
		var sy = window.scrollY;
		// only trigger if scrolled more than delta
		if (Math.abs(lastScrollY - sy) > delta) {
			// scroll down -> hide nav bar
			if (sy > lastScrollY && sy > navHeight) {
				nav.classList.add('slide-out');
				nav.classList.remove('slide-in');
			}
			// scroll up -> show nav bar
			else if (sy < lastScrollY) {
				nav.classList.add('slide-in');
				nav.classList.remove('slide-out');
			}
			// update current scroll point
			lastScrollY = sy;
		}
	}

// Add event listener & debounce so not varantly checking for scroll
	var didScroll = false;
	window.addEventListener('scroll', function(e){
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			scrolled();
			didScroll = false;
		}
	}, 250)
}