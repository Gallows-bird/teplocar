$(document).ready(function () {
	// nav icon animate
	var burgerAnimate = $('.nav-toggle');

	$('#navbarCollapse').on('show.bs.collapse', function () {
		burgerAnimate.addClass('nav-toggle--active');
	});

	$('#navbarCollapse').on('hide.bs.collapse', function () {
		burgerAnimate.removeClass('nav-toggle--active');
	});

});

$(window).on("load resize", function(){
	var width = $(document).width();
	
	if (width <= 991) {
		$('.slider').slick('unslick');
	} else {
		$('.slider').not('.slick-initialized').slick({  
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true
		});
	}
});