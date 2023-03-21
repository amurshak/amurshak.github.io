$(document).ready(function() {
    
    
    /* for stick navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').removeClass('sticky');
        } else {
            $('nav').addClass('sticky');
        }
    }, {
        offset: '60px;'
    });

/* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('js--section-plans').offset().top}, 1000);
    });
    
     $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('js--section-features').offset().top}, 1000);
    });


});