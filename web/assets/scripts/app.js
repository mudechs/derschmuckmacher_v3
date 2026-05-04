document.addEventListener('DOMContentLoaded', () => {
	if (document.getElementById('bg-image') !== null) {
		resizeFullscreenImage()
	}
})

window.addEventListener('resize', () => {
	if (document.getElementById('bg-image') !== null) {
		resizeFullscreenImage()
	}
})

function resizeFullscreenImage() {
	let content = document.getElementById('bg-image')
	let windowHeight = window.innerHeight
	// let headerHeight = document.querySelector('#header').offsetHeight
	// let height = windowHeight

	content.style.height = windowHeight + 'px'
}

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
}

var el = document.querySelector('.scroll-top');

var showTopScroller = function() {
	var y = window.scrollY;
	if (y >= 300) {
		el.classList.add('d-block');
		el.classList.remove('d-none');
	} else {
		el.classList.add('d-none');
		el.classList.remove('d-block');
	}
};

window.addEventListener("scroll", showTopScroller);

document.addEventListener('DOMContentLoaded', function() {
	const hamburgerBtn = document.querySelector('.hamburger-menu');
	const hero = document.querySelector('.bg-image.vh-100');

	if (hamburgerBtn && hero) {
		const updateHamburgerOverHero = () => {
			hamburgerBtn.classList.toggle('over-hero', hero.getBoundingClientRect().bottom > 0);
		};
		updateHamburgerOverHero();
		window.addEventListener('scroll', updateHamburgerOverHero, { passive: true });
	}

	const modalElement = document.getElementById('navigationModal');

	if (!hamburgerBtn || !modalElement) return;

	const navigationModal = new bootstrap.Modal(modalElement);

	hamburgerBtn.addEventListener('click', function() {
		this.classList.toggle('active');
		this.setAttribute('aria-expanded', this.classList.contains('active'));
		navigationModal.toggle();
	});

	// Reset hamburger state when modal closes
	modalElement.addEventListener('hidden.bs.modal', function() {
		hamburgerBtn.classList.remove('active');
		hamburgerBtn.setAttribute('aria-expanded', 'false');
	});

	// Close modal when clicking on a nav link
	const navLinks = document.querySelectorAll('#navigationModal .nav-link');
	navLinks.forEach(link => {
		link.addEventListener('click', function() {
			navigationModal.hide();
		});
	});
});