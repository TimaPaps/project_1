//выползающее меню header
let countMenuBtn = 0;

$('.header-menu-btn').click(function() {

    if (countMenuBtn == 0) {
        countMenuBtn++;
        $('.header-nav').animate({
            'left': 0
        })
    } else {
        countMenuBtn--;
        $('.header-nav').animate({
            'left': -100 + '%'
        })
    }    
});