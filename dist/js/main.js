$(document).ready(function () {
	// nav icon animate
	var burgerAnimate = $('.nav-toggle');

	$('#navbarCollapse').on('show.bs.collapse', function () {
		burgerAnimate.addClass('nav-toggle--active');
	});

	$('#navbarCollapse').on('hide.bs.collapse', function () {
		burgerAnimate.removeClass('nav-toggle--active');
	});
	// nav icon animate

	// AJAX
	$('#expressFormId').submit(function() {
		$.ajax({
			type: "POST",
			url: "send.php",
			data: $(this).serialize()
		}).done(function() {
			$('#doneModal').modal('show');
		});
		return false;
	});

	$('#expressFormModal').submit(function() {
		$.ajax({
			type: "POST",
			url: "send.php",
			data: $(this).serialize()
		}).done(function() {
			$('#formModal').modal('hide');
			$('#doneModal').modal('show');
		});
		return false;
	});
});

	// AJAX


	// Slider
$(window).on("load resize", function(){
	$('.slide').css('display', 'flex');
	var width = $(document).width();
	
	if (width <= 974) {
		$('.slider').slick('unslick');
	} else {
		$('.slider').not('.slick-initialized').slick({  
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true
		});
	}
});
	// Slider
	// WOW
wow = new WOW ({
	mobile: false
});

wow.init();
	// WOW

	// show tel
$('.show-tel').on('click', function() {
	$(this).fadeOut(200, function() {
		$('.modal-tel').fadeIn(200);
	});
});
	// show tel
