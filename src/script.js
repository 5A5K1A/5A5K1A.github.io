jQuery(document).ready(function($) {
	$('li.nav-item').on('click', function() {
		if( $( window ).width() <= 752 ) {
			$('button.navbar-toggle').trigger('click');
		}
	});

	var $root = $('html, body');
	$('a[href*=#]').on('click', function(event){
		event.preventDefault();
		$root.animate({
			scrollTop: $(this.hash).offset().top
		}, 750);
	});
});
