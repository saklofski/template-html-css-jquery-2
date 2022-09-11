$(function () {
    'use strict'

    /* header height */

    var myHeader = $('.header'),
        mySlider = $('.bxslider')
    

    myHeader.height($(window).height());

    $(window).resize(function() {
        myHeader.height($(window).height());

        /* list item center */

        mySlider.each(function() {
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height())/2);
        });

    });

    /* links add active class */

    $('.links li a').click(function() {
        $(this).parent().addClass('active').siblings().removeClass('active')
    });


    /* list item center */

    mySlider.each(function() {
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height())/2);
    }); 

    /* slider */

    mySlider.bxSlider({
        pager:false
    });

    /* smooth scroll to div */

    $('.links li a').click(function() {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
        /* console.log($(this).data('value')); */
    });

    /* Start Slider */

    (function autoSlider() {

        $('.slider .active').each(function() {

            if(!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(1000, function() {

                    $(this).removeClass('active').next().addClass('active').fadeIn();

                    autoSlider();

                });

            } else {

                $(this).delay(3000).fadeOut(1000, function() {

                    $(this).removeClass('active');

                    $('.slider div').eq(0).addClass('active').fadeIn();

                    autoSlider();

                });

            }

        });

    }());

    /* End Slider */

    /* Start mixitup */

    var mixer = mixitup('#containere');
    var mixer = mixitup(containereEl);
    var mixer = mixitup(containereEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
    }); 

    /* End mixitup */

});


