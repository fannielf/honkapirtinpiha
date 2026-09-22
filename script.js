document.querySelector('#year').textContent = new Date().getFullYear();

const carousel = document.querySelector('.host-carousel');

if (carousel) {
	const track = carousel.querySelector('.host-carousel-track');
	const slides = carousel.querySelectorAll('.host-carousel-slide');
	const dots = carousel.querySelectorAll('.carousel-dot');
	let activeSlide = 0;

	const showSlide = (index) => {
		activeSlide = (index + slides.length) % slides.length;
		track.style.transform = `translateX(-${activeSlide * 100}%)`;
		dots.forEach((dot, dotIndex) => {
			const isActive = dotIndex === activeSlide;
			dot.classList.toggle('is-active', isActive);
			dot.toggleAttribute('aria-current', isActive);
		});
	};

	carousel.querySelector('[data-carousel-previous]').addEventListener('click', () => showSlide(activeSlide - 1));
	carousel.querySelector('[data-carousel-next]').addEventListener('click', () => showSlide(activeSlide + 1));
	dots.forEach((dot) => dot.addEventListener('click', () => showSlide(Number(dot.dataset.carouselSlide))));
}

const gardenCarousel = document.querySelector('.garden-carousel');

if (gardenCarousel) {
	const track = gardenCarousel.querySelector('.garden-carousel-track');
	const slides = gardenCarousel.querySelectorAll('.garden-carousel-slide');
	const current = gardenCarousel.querySelector('[data-garden-current]');
	let activeSlide = 0;

	const showSlide = (index) => {
		activeSlide = (index + slides.length) % slides.length;
		track.style.transform = `translateX(-${activeSlide * 100}%)`;
		current.textContent = activeSlide + 1;
	};

	gardenCarousel.querySelector('[data-garden-previous]').addEventListener('click', () => showSlide(activeSlide - 1));
	gardenCarousel.querySelector('[data-garden-next]').addEventListener('click', () => showSlide(activeSlide + 1));
}

const cabinLightbox = document.querySelector('.cabin-lightbox');

if (cabinLightbox) {
	const cabinImages = [
		{ src: 'assets/images/aamupala.jpg', alt: 'Breakfast at Honkapirtin Piha', label: 'Breakfast' },
		{ src: 'assets/images/parisanky-pirtti.jpg', alt: 'Double room in the summer cabin', label: 'Double room' },
		{ src: 'assets/images/aitta.jpg', alt: 'Aitta at Honkapirtin Piha', label: 'Aitta' },
		{ src: 'assets/images/pikku-pirtti.jpg', alt: 'Small room in the summer cabin', label: 'Small room' },
		{ src: 'assets/images/ulkokeittio.jpg', alt: 'Outdoor kitchen at Honkapirtin Piha', label: 'Outdoor kitchen' },
		{ src: 'assets/images/sauna.jpg', alt: 'Sauna at Honkapirtin Piha', label: 'Sauna' },
	];
	const cabinImage = cabinLightbox.querySelector('.cabin-lightbox-image');
	const cabinCaption = cabinLightbox.querySelector('#cabin-lightbox-caption');
	let activeCabinImage = 0;

	const showCabinImage = (index) => {
		activeCabinImage = (index + cabinImages.length) % cabinImages.length;
		const image = cabinImages[activeCabinImage];
		cabinImage.src = image.src;
		cabinImage.alt = image.alt;
		cabinCaption.textContent = `${activeCabinImage + 1} / ${cabinImages.length} - ${image.label}`;
	};

	document.querySelectorAll('[data-cabin-image]').forEach((thumbnail) => {
		thumbnail.addEventListener('click', () => {
			showCabinImage(Number(thumbnail.dataset.cabinImage));
			cabinLightbox.showModal();
		});
	});
	cabinLightbox.querySelector('[data-cabin-previous]').addEventListener('click', () => showCabinImage(activeCabinImage - 1));
	cabinLightbox.querySelector('[data-cabin-next]').addEventListener('click', () => showCabinImage(activeCabinImage + 1));
	cabinLightbox.querySelector('.cabin-lightbox-close').addEventListener('click', () => cabinLightbox.close());
	cabinLightbox.addEventListener('click', (event) => {
		if (event.target === cabinLightbox) cabinLightbox.close();
	});
}

const compactLightbox = document.querySelector('.compact-lightbox');

if (compactLightbox) {
	const compactLightboxImage = compactLightbox.querySelector('.compact-lightbox-image');

	document.querySelectorAll('[data-compact-lightbox]').forEach((button) => {
		button.addEventListener('click', () => {
			const image = button.querySelector('.compact-photo');
			compactLightboxImage.src = image.src;
			compactLightboxImage.alt = image.alt;
			compactLightbox.showModal();
		});
	});
	compactLightbox.querySelector('.compact-lightbox-close').addEventListener('click', () => compactLightbox.close());
	compactLightbox.addEventListener('click', (event) => {
		if (event.target === compactLightbox) compactLightbox.close();
	});
}