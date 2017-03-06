jQuery(document).ready(function($) {
    $('li.nav-item').on('click', function() {
        $('button.navbar-toggle').trigger('click');
    });
});
