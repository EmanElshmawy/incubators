/*global $,owl,smoothScroll,AOS,alert*/
$(document).ready(function () {
    "use strict";

    /* ---------------------------------------------
     Loader Screen
    --------------------------------------------- */
    $(window).load(function () {
        $("body").css('overflow-y', 'auto');
        $('#loading').fadeOut(1000);
    });

    $('[data-tool="tooltip"]').tooltip({
        trigger: 'hover',
        animate: true,
        delay: 50,
        container: 'body'
    });

    smoothScroll.init({
        speed: 800,
        updateURL: false,
        offset: 50
    });

    /* ---------------------------------------------
     Scrool To Top Button Function
    --------------------------------------------- */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".toTop").css("right", "20px");
        } else {
            $(".toTop").css("right", "-60px");
        }
    });

    $(".toTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //customize the header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.main-head').addClass('sticky');
        } else {
            $('.main-head').removeClass('sticky');
        }
    });

    $('[data-fancybox]').fancybox();

    $(".ev-slider").owlCarousel({
        nav: false,
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: true,
        autoplay: 5000,
        items: 3,
        autoplayHoverPause: true,
        center: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            },
            1300: {
                items: 3
            }
        }
    });
    $(".news-slider").owlCarousel({
        nav: true,
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: true,
        autoplay: 5000,
        items: 3,
        autoplayHoverPause: true,
        center: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 2
            },
            1300: {
                items: 3
            }
        }
    });
    $(".member-slider").owlCarousel({
        nav: true,
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: true,
        autoplay: 5000,
        items: 3,
        autoplayHoverPause: true,
        center: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 2
            },
            1300: {
                items: 3
            }
        }
    });
    $(".cl-slider").owlCarousel({
        nav: true,
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: false,
        autoplay: 5000,
        items: 1,
        autoplayHoverPause: true,
        center: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1.1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.cll-slider').owlCarousel({
        items: 5,
        smartSpeed: 450,
        autoplay: 4000,
        dots: false,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $('.videos-slider').owlCarousel({
        center: true,
        items: 1.7,
        loop: true,
        dots: true,
        navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
        nav: true,
        autoplay: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1.7
            }
        }
    });


    $(".h-slider").owlCarousel({
        nav: true,
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: false,
        autoplay: 4000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        items: 1
    });

    $('.open-menu').click(function () {
        $('.org').slideToggle();
    });

    $('.org,.open-menu').click(function (e) {
        e.stopPropagation();
    });

    var windowWidth = $(window).width();
    if (windowWidth <= 1024) {
        $('body').click(function () {
            $('.org').slideUp();
        });
    }

    $('.timer').countTo();

    $('.open-menu').click(function () {
        $('.mob-menu').addClass('active');
    });

    $('.cl-menu').click(function () {
        $('.mob-menu').removeClass('active');
    });

    AOS.init({
        once: true
    });

    $('.login-wrapper').height(window.innerHeight);

    $('.open-users').click(function () {
        $('.chat-users').addClass('active');
    });
    $('.open-info').click(function () {
        $('.chat-info').addClass('active');
    });
    $('.off-users').click(function () {
        $('.chat-users').removeClass('active');
    });
    $('.off-info').click(function () {
        $('.chat-info').removeClass('active');
    });

    $('.chat-layout').height(window.innerHeight - 100);

    $('.op-new').click(function () {
        $('.chat-new-view').remove();
    });
    
    var loadFile = function (event) {
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
    };
});