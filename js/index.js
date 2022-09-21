// start collapse
let collapses = document.querySelectorAll("[data-collapse='collapse']");

collapses.forEach((element) => {
	element.addEventListener('click', function () {
		let ariaExpanded = element.getAttribute('aria-expanded');
		ariaExpanded === true ? element.setAttribute('aria-expanded', false) : element.setAttribute('aria-expanded', true);
		let container = this.nextElementSibling;
		container.classList.toggle('active');
	});
});
// end collapse
