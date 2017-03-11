jQuery(document).ready(function($) {

	var MenuButton = $('button.navbar-toggle');
	var $root      = $('html, body');

	$('li.nav-item').on('click', function() {
		if( $(window).width() <= 752 ) {
			MenuButton.trigger('click');
		}
	});

	MenuButton.on('click', function(button) {
		if( button.target.innerText == 'menu' ) { button.target.innerText = 'close menu'; }
		else { button.target.innerText = 'menu'; }
	});

	$('a[href*=#]').on('click', function(e){
		e.preventDefault();

		$(document).off('scroll');

		$('li.nav-item').removeClass('active');
		$(this).parent('li.nav-item').addClass('active');

		$root.animate({
			scrollTop: $(this.hash).offset().top
		}, 750);
	});

	if( $(window).width() > 752 ) {
		$(document).on('scroll', menuScroll);
	}

	console.log('%cHej welkom!', 'font-size: 2.5em; color: #00ADB5;');
	console.log("%cWat tof dat je ook mijn code bekijkt :)\nAls je graag de volledige repo wilt zien, check dan even mijn GitHub.\nhttps://github.com/5A5K1A\n\nPS: Als je tips of verbeteringen voor deze pagina weet, graag!\nSchiet ze maar in via https://github.com/5A5K1A/5A5K1A.github.io/issues\n#altijdleukomteleren", 'font-size: 1.1em; color: #393E46; line-height: 1.8em;');

});

function menuScroll(event){
    var currPos = $(document).scrollTop();

    $('li.nav-item.nav-main').each(function() {
        var currLink = $(this).find('a');

        var refElement = $(currLink.attr('href'));
        var elemHeight = refElement.height() + refElement.next().height();

        if( refElement.position().top <= currPos && refElement.position().top + elemHeight > currPos) {
            $('li.nav-item').removeClass('active');
            currLink.parent('li.nav-item').addClass("active");
        }
        else{
            $(this).removeClass("active");
        }
    });
}