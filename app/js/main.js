$(document).ready(function () {
	// nav icon animate
	var burgerAnimate = $('.nav-toggle');

	$('#navbarCollapse').on('show.bs.collapse', function () {
		burgerAnimate.addClass('nav-toggle--active');
	});

	$('#navbarCollapse').on('hide.bs.collapse', function () {
		burgerAnimate.removeClass('nav-toggle--active');
	});

	$('.slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1
	});
});