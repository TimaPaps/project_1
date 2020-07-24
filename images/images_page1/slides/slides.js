//блок верхний слайдер
let slides = $('.top-slider-line-item');
let count = 0;
let firstSlide = $('.top-slider-line-item').eq(0).clone();
$('.top-slider-line').append(firstSlide);


$('.top-slider-right-btn').click(function() {    

    if (count != slides.length - 1) {
        count++;
        //console.log(count);
        $('.top-slider-line').animate({
            'left': (-100 * count) + '%'
        }, 500);
    } else {
        count++;
        $('.top-slider-line').animate({
            'left': (-100 * count) + '%'  
        }, 500, function() {
            $('.top-slider-line').css('left', 0);
        });
        
        count = 0;  
    }
});

$('.top-slider-left-btn').click(function() {
    if (count != 0) {
        count--;
        //console.log(count);
        $('.top-slider-line').animate({
            'left': (-100 * count) + '%'
        }, 500);
    } else {
        count = slides.length;
        $('.top-slider-line').animate({
            'left': (-100 * count) + '%'
        }, 0, function() {
            $('.top-slider-line').animate({
                'left': (-100 * (count -= 1)) + '%'
            }, 500);
        });
    }
});

//блок нижний слайдер
let slidesBottom = $('.bottom-slider-line-item');
let countBottom = 0;
let firstSlideBottom = $('.bottom-slider-line-item').eq(0).clone();
$('.bottom-slider-line').append(firstSlideBottom);

$('.bottom-slider-right-btn').click(function() {    

    if (countBottom != slidesBottom.length - 1) {
        countBottom++;
        console.log(countBottom);
        $('.bottom-slider-line').animate({
            'left': (-50 * countBottom) + '%'
        }, 500);
    } else {
        countBottom++;
        $('.bottom-slider-line').animate({
            'left': (-50 * countBottom) + '%'
        }, 500, function() {
            $('.bottom-slider-line').css('left', 0);
        });
        
        countBottom = 0;  
    }
});

$('.bottom-slider-left-btn').click(function() {
    if (countBottom != 0) {
        countBottom--;
        console.log(countBottom);
        $('.bottom-slider-line').animate({
            'left': (-50 * countBottom) + '%'
        }, 500);
    } else {
        countBottom = slidesBottom.length;
        $('.bottom-slider-line').animate({
            'left': (-50 * countBottom) + '%'
        }, 0, function() {
            $('.bottom-slider-line').animate({
                'left': (-50 * (countBottom -= 1)) + '%'
            }, 500);
        });
    }
});