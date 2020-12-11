$(document).ready(function(){
    $('.portfolio-slider__items').owlCarousel({
        margin:10,
        nav:true,
        navText: ['<svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14 26L2 14L14 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',"<svg width='16' height='28' viewBox='0 0 16 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2 26L14 14L2 2' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></svg>"],
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
        navText: ['<svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14 26L2 14L14 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',"<svg width='16' height='28' viewBox='0 0 16 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2 26L14 14L2 2' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></svg>"],
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

