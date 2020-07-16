//выползающее меню header
let countMenuBtn = 0;
console.log(countMenuBtn);

$(window).resize(function() {    

    if ($(window).width() < 700) {

        $('.header-menu-btn').css('display', 'block');
        
        $('.header-menu-btn').click(function() {   
            if (countMenuBtn == 0) {
                countMenuBtn++;
                console.log(countMenuBtn);

                $('.top-slider-right-btn').css('z-index', 0);
                $('.top-slider-left-btn').css('z-index', 0);
                $('.bottom-slider-right-btn').css('z-index', 0);
                $('.bottom-slider-left-btn').css('z-index', 0);
                $('.header-nav').animate({
                    'left': 0
                });   
                $('.header-menu-btn').css('display', 'none');
                $('.header-menu-close-btn').css('display', 'block');
            }    
        });
        
        $('.header-menu-close-btn').click(function() {
        
            if (countMenuBtn == 1) {
                countMenuBtn--;
                console.log(countMenuBtn);

                $('.top-slider-right-btn').css('z-index', 2);
                $('.top-slider-left-btn').css('z-index', 2);
                $('.bottom-slider-right-btn').css('z-index', 2);
                $('.bottom-slider-left-btn').css('z-index', 2);
                $('.header-nav').animate({
                    'left': -100 + '%'
                });
                $('.header-menu-btn').css('display', 'block');
                $('.header-menu-close-btn').css('display', 'none');
            }
        });
    }

    if ($(window).width() >= 700) {

        $('.header-menu-btn').css('display', 'none');
        $('.header-menu-close-btn').css('display', 'none');
    }
});
console.log(countMenuBtn);