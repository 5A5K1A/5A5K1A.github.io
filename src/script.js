jQuery(document).ready(function($) {
    $('li.nav-item').on('click', function() {
        if( $( window ).width() <= 752 ) {
            $('button.navbar-toggle').trigger('click');
        }
    });
});
