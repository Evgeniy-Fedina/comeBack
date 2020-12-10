$(document).ready(function(){
    $('.portfolio-slider__items').owlCarousel({
        margin:10,
        nav:true,
        navText: ["<img src='../images/arrow-left.svg'>","<img src='../images/arrow-right.svg'>"],
        URLhashListener:true,
        startPosition: 'URLHash',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }

    });

    $('.comments-slider__items').owlCarousel({
        margin:10,
        nav:true,
        navText: ["<img src='../images/arrow-left.svg'>","<img src='../images/arrow-right.svg'>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
    });

    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('fixed-page');
    });


});

