$(document).ready(function(){
	var speed = 500;// fade speed
	var autoswitch = true; //auto slider option
	var autoswitch_speed = 4000; // Auto slider speed

	//add initial active class
	$('.slide').first().addClass('active');
	//Hide al slides
	$('.slide').hide();
	$('.slide').show();
	
	$('#next').on('click', function() {
		$('.active').removeClass('active').addClass('oldActive');
		if ($('.oldActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	});


	$('#prev').on('click', function() {
		$('.active').removeClass('active').addClass('oldActive');
		if ($('.oldActive').is(':first-child')) {
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);

	});
});