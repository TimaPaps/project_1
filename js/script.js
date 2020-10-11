//выползающее меню header
$(window).on('load resize', function() {    

    if ($(window).width() < 700) {

        $('.header-menu-btn').css('display', 'block');
        
        let countMenuBtn = 0;

        $('.header-menu-btn').click(function() {   

            if (countMenuBtn % 2 === 0) {                
                $('.top-slider-right-btn').css('z-index', 0);
                $('.top-slider-left-btn').css('z-index', 0);
                $('.bottom-slider-right-btn').css('z-index', 0);
                $('.bottom-slider-left-btn').css('z-index', 0);
                $('.header-nav').animate({
                    'left': 0
                });
                $('.header-menu-btn').addClass('menu-open');   
            } else {
                $('.top-slider-right-btn').css('z-index', 2);
                $('.top-slider-left-btn').css('z-index', 2);
                $('.bottom-slider-right-btn').css('z-index', 2);
                $('.bottom-slider-left-btn').css('z-index', 2);
                $('.header-nav').animate({
                    'left': -100 + '%'
                });
                $('.header-menu-btn').removeClass('menu-open');  
            }
            countMenuBtn++;
            //console.log(countMenuBtn);
        });
    }

    if ($(window).width() >= 700) {
        $('.header-menu-btn').css('display', 'none');
    }
});