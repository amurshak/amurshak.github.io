$(document).ready(function() {
    
    let lastScrollTop = 0;
    let navVisible = true;
    
    /* Scroll-based navigation visibility */
    $(window).scroll(function() {
        let scrollTop = $(this).scrollTop();
        let windowHeight = $(window).height();
        
        // Show/hide nav based on scroll position and direction
        if (scrollTop > windowHeight) {
            // Past viewport height
            if (scrollTop > lastScrollTop && navVisible) {
                // Scrolling down - hide nav
                $('nav').addClass('nav-hidden');
                navVisible = false;
            } else if (scrollTop < lastScrollTop && !navVisible) {
                // Scrolling up - show nav
                $('nav').removeClass('nav-hidden');
                navVisible = true;
            }
        } else {
            // Within first viewport - always show nav
            if (!navVisible) {
                $('nav').removeClass('nav-hidden');
                navVisible = true;
            }
        }
        
        lastScrollTop = scrollTop;
    });
    
    /* for stick navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
    }, {
        offset: '60px;'
    });

/* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
     $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    /* Mobile navigation toggle */
    $('.mobile-nav-toggle').click(function() {
        $(this).toggleClass('active');
        $('.main-nav').toggleClass('active');
    });

    /* Close mobile menu when clicking on a link */
    $('.main-nav a').click(function() {
        $('.mobile-nav-toggle').removeClass('active');
        $('.main-nav').removeClass('active');
    });

});